const { ethers, network } = require("hardhat");
const { expect } = require("chai");


const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const  USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

const DAI_WHALE = "0x97f991971a37D4Ca58064e6a98FC563F03A71E5c";

describe('Liquidity Example', () => {

    let liquidityExample;
    let accounts;
    let usdc;
    let dai;

    before(async()=>{
        const LiquidityExample = await ethers.getContractFactory("LiquidityExamples");
        liquidityExample = await LiquidityExample.deploy();

        accounts = await ethers.getSigners();
        dai = await ethers.getContractAt("IERC20" , DAI);
        usdc = await ethers.getContractAt("IERC20" , USDC);

        await network.provider.request({
            method:"hardhat_impersonateAccount",
            params:[DAI_WHALE]
        });
        
        await network.provider.request({
            method:"hardhat_impersonateAccount",
            params:[DAI_WHALE]
        });
        const daiwale = await ethers.getSigner(DAI_WHALE);
        const usdcwale = await ethers.getSigner(DAI_WHALE);

        const daiAmount = 1000n*10n**18n;
        const usdcAmount = 1000n*10n**6n;

        const daiBal = await dai.balanceOf(daiwale.address);
        const usdcBal = await dai.balanceOf(usdcwale.address);
        console.log(daiBal);
        console.log(usdcBal);
        
    });
})
