const hre = require("hardhat");

async function main()
{
    const booToken = await hre.ethers.getContractFactory("BooToken");
    const lock = await booToken.deploy();


    console.log(lock.address);


    const lifeToken = await hre.ethers.getContractFactory("ERC20Life");
    const result = await lifeToken.deploy();

    console.log(result.address);

    
    const swapSingleInput = await hre.ethers.getContractFactory("SingleSwapToken");
    const a = await swapSingleInput.deploy();


    console.log(a.address);


    
    const swapMultiInput = await hre.ethers.getContractFactory("SwapMultiHop");
    const b = await swapMultiInput.deploy();


    console.log(b.address);
}

main().catch((Error)=>{
    console.log(Error)
})