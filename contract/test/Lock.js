const { ethers } = require("hardhat");
const { expect } = require("chai");


const DAI = "0x2bcAE8205a77dabB2479CF2c85ded7d963101B86";
const WETH9 = "0xEF1DACBce5194C668BEe55f2ca599F366709db0C";
const  USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SingleSwapToken", () => {
  let singleSwapToken;
  let accounts;
  let weth;
  let dai;
  let usdc;

  before(async () => {
    accounts = await ethers.getSigners();

    const SingleSwapTokenFactory = await ethers.getContractFactory("SingleSwapToken");
    singleSwapToken = await SingleSwapTokenFactory.deploy();


    weth = await ethers.getContractAt("IWETH", WETH9);
    dai = await ethers.getContractAt("IERC20", DAI);
    usdc = await ethers.getContractAt("IERC20", USDC);
  });

  it("SwapExactInputSingle", async () => {
    const amountIn = 10n**18n;
    await weth.deposit({ value: amountIn });
    await weth.approve(singleSwapToken.target, amountIn);

    await singleSwapToken.swapExactInputSingle(amountIn);
    const daiBalance = await dai.balanceOf(accounts[0].address);
    console.log("DAI Balance of account[0]:", daiBalance.toString());
  });
});
