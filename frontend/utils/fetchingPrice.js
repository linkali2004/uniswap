const { ethers, toBigInt } = require("ethers");
const { abi: IUniswapV3PoolABI } = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json");
const { abi: QuoterABI } = require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json");

const { getAbi, getPool } = require("./priceHelper");

const infuraProvider = new ethers.JsonRpcProvider();
const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new ethers.Wallet(privateKey, infuraProvider);
const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

// const poolAddress = "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8";

export const getPrice = async (inputAmount, poolAddress) => {
  const poolContract = new ethers.Contract(poolAddress, IUniswapV3PoolABI, infuraProvider);

  const tokenAddress0 = await poolContract.token0();
  const tokenAddress1 = await poolContract.token1();


  const token0ABI = await getAbi("0x6B175474E89094C44Da98b954EedeAC495271d0F");
  const token1ABI = await getAbi(tokenAddress1);

  const token0Contract = new ethers.Contract("0x6B175474E89094C44Da98b954EedeAC495271d0F", token0ABI, infuraProvider);
  const token1Contract = new ethers.Contract(tokenAddress1, token1ABI, infuraProvider);

  const token0Symbol = await token0Contract.symbol();
  const token1Symbol = await token1Contract.symbol();

  const token0Decimals = await token0Contract.decimals();
  const token1Decimals = await token1Contract.decimals();

  console.log(`Token 0 Symbol: ${token0Symbol}`);
  console.log(`Token 1 Symbol: ${token1Symbol}`);
  console.log(`Token 0 Decimals: ${token0Decimals}`);
  console.log(`Token 1 Decimals: ${token1Decimals}`);

  const quoterContract = new ethers.Contract(quoterAddress, QuoterABI, wallet);

  const immutables = await getPool(poolContract);

  const amountIn = ethers.parseUnits(inputAmount.toString(), token0Decimals);
  try { 
    const quotedAmountOut = await quoterContract.quoteExactInputSingle(
      immutables.token0,
      immutables.token1,
      Number(immutables.fee),
      Number(10),
      Number(0)
    );

    // const amountOut = ethers.formatUnits(quotedAmountOut, token1Decimals);
    // console.log(`Quoted Amount Out: ${quotedAmountOut.toString()}`);
    // console.log(`Amount Out (Formatted): ${amountOut}`);
    console.log(quotedAmountOut);
    return [quotedAmountOut ,token0Symbol,token1Symbol];
  } catch (error) {
    console.error("Error quoting amount:", error);
    return [];
  }
};

