const {ethers} = require("ethers");
const {abi:IUniswapV3PoolABI} = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json");
const{abi:QuoterABI} = require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json");

const {getAbi,getPool} = require("./priceHelper");

const MAINNET_URL = "https://mainnet.infura.io/v3/403d8f6a043c45fa9e93f33926ac8a69";
const provider = new ethers.JsonRpcProvider(MAINNET_URL);
const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

export const getPrice = async(inputAmount,poolAddress)=>{
    const poolContract = new ethers.Contract(
        poolAddress,
        IUniswapV3PoolABI,
        provider
    );

    console.log(poolContract);

    const tokenAddress0 = await poolContract.token0();
    const tokenAddress1 = await poolContract.token1();

    console.log(tokenAddress0,tokenAddress1);

    const token0ABI = await getAbi(tokenAddress0);
    const token1ABI = await getAbi(tokenAddress1);

    const token0Contract = new ethers.Contract(tokenAddress0,token0ABI,provider);
    const token1Contract = new ethers.Contract(tokenAddress1,token1ABI,provider);

    const token0Symbol = await token0Contract.symbol();
    const token1Symbol = await token1Contract.symbol();

    const token0Decimals = await token0Contract.decimals();
    const token1Decimals = await token1Contract.decimals();

    const quoterContract = new ethers.Contract(quoterAddress,QuoterABI,provider);

    const immutables = await getPool(poolContract);

    const amountIn = ethers.parseUnits(
        inputAmount.toString(),
        token0Decimals
    );

    const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
        immutables.token0,
        immutables.token1,
        immutables.fee,
        amountIn,
        0
    )
    const amountOut = ethers.parseUnits(quotedAmountOut.toString(),token1Decimals);
    return [amountOut,token0Symbol,token1Symbol];
}
