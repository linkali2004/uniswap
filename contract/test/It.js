const { ethers, network } = require("hardhat");
const { expect } = require("chai");


const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; 

const DAI_WHALE = "0x97f991971a37D4Ca58064e6a98FC563F03A71E5c";

describe('Liquidity Example', () => {

    let liquidityExample;
    let accounts;
    let usdc;
    let dai;
    let daiBal;
    let usdcBal;
    before(async()=>{
        const LiquidityExample = await ethers.getContractFactory("LiquidityExample");
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

        daiBal = await dai.balanceOf(daiwale.address);
        usdcBal = await usdc.balanceOf(daiwale.address);
        

        const tx = await accounts[0].sendTransaction({
            to: daiwale.address,
            value: ethers.parseEther("2") // sending 1 Ether
        });
        await tx.wait();

        await dai.connect(daiwale).transfer(accounts[0].address, daiBal);
        await usdc.connect(daiwale).transfer(accounts[0].address,usdcBal);
    });
    it("mintNewPositions", async ()=>{
        // console.log(ethers.formatEther(await dai.balanceOf(accounts[0].address)));       
        await dai.connect(accounts[0]).transfer(liquidityExample.target,daiBal);
        await usdc.connect(accounts[0]).transfer(liquidityExample.target,usdcBal);

    }).timeout(80000);
})
