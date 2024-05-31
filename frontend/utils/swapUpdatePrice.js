import { AlphaRouter } from "@uniswap/smart-order-router";
import { ethers, toBigInt } from "ethers";
import {Token,CurrencyAmount,TradeType,Percent} from "@uniswap/sdk-core";

const V3_SWAP_ROUTER_ADDRESS = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";
const chainId = 1;

const MAINNET_URL = "https://mainnet.infura.io/v3/403d8f6a043c45fa9e93f33926ac8a69";
const provider = new ethers.JsonRpcProvider(MAINNET_URL);

const router = new AlphaRouter({chainId:chainId,provider:provider});

const name0 = "Wrapped Ether";
const symbol0 = "WETH";
const decimals0s = 18;
const address0 = "0xC02aaA39b223FE8D0A0e5c4F27eAD9083C756Cc2";


const name1 = "DAI";
const symbol1 = "DAI";
const decimals1s = 18;
const address1 = "0x6B175474E89094C44Da98b954EedeAC495271d0F";


const WETH = new Token(chainId,address0,decimals0s,symbol0,name0);
const DAI = new Token(chainId,address1,decimals1s,symbol1,name1);

export const swapUpdatePrice = async (inputAmount,slippage,deadline,wallet)=>{
    const percentSlippage = new Percent(slippage);
    const wei = ethers.parseUnits(inputAmount.toString(),decimals0s);
    const currenctAmount = CurrencyAmount.fromRawAmount(
        WETH,
        toBigInt(wei)
    );

    const route = await router.route(currenctAmount,DAI,TradeType.EXACT_INPUT,{
        recipient:wallet,
        slippageTolerance:percentSlippage,
        deadline:deadline
    });
    const txn = {
        data:route.methodParameters.calldata,
        to:V3_SWAP_ROUTER_ADDRESS,
        value:toBigInt(route.methodParameters.value),
        from:wallet,
        gas:toBigInt(route.gasPriceWei),
        gasLimit:ethers.hexlify(1000000)
    };

    const quoteAmountOut = route.quote.toFixed(6);
    const ratio = (inputAmount/quoteAmountOut).toFixed(3);

    console.log(quoteAmountOut,ratio);

    return [txn,quoteAmountOut,ratio];
}