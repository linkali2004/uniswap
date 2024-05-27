import {swapInputMultiHop,swapInputSingleHop,erc20Life,booToken,IWETH} from "../constants/Address";
import {BooAbi,LifeAbi,swapSingleInput,Iweth,SwapMultiHop} from "../constants/ABI";
import {Web3Modal} from "web3modal";
import {ethers} from "ethers";

export const checkIfWalletConnected = async() =>{
    try
    {
        if(!window.ethereum) return console.log("Connect metamask");
        const accounts = await window.ethereum.request({
            method:"eth_accounts"
        })
        console.log(accounts[0]);
    }catch(err)
    {
        console.log(err);
    }
}

export const fetchBooContract = (signer)=> new ethers.Contract(booToken,BooAbi,signer);
export const fetchLifeContract = (signer) => new ethers.Contract(erc20Life,LifeAbi,signer);
export const fetchWethContract = (signer) => new ethers.Contract(IWETH,Iweth,signer);
export const fetchDaiContract = (signer) => new ethers.Contract("0x6B175474E89094C44Da98b954EedeAC495271d0F",Iweth,signer);
export const fetchSwapSingleInput = (signer) => new ethers.Contract(swapInputSingleHop,swapSingleInput,signer);

export const gettingAllToken = async (address)=>{
    try{
        const provider = new ethers.BrowserProvider(window.ethereum);
        const wallet = await provider.getSigner();
        const booContract = fetchBooContract(wallet);
        const wethContract = fetchWethContract(wallet);
        const lifeContract = fetchLifeContract(wallet);

        const balanceOfBoo = await booContract.balanceOf(address);
        const balanceOfLife = await lifeContract.balanceOf(address);
        const balanceOfWeth = await wethContract.balanceOf(address);

        return [ ethers.formatEther(balanceOfBoo) ,  ethers.formatEther(balanceOfLife) ,  ethers.formatEther(balanceOfWeth)];

    }catch(error)
    {
        console.log(error)
    }
}


export const getNetworkName = async ()=>
{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const networkName = await provider.getNetwork();
    return networkName;
}


export const getContractsforSwap = async (amount,address)=>{
    const provider = new ethers.JsonRpcProvider();
    const wallet  = await provider.getSigner();
    
    const weth = fetchWethContract(wallet);
    const singleSwap = fetchSwapSingleInput(wallet);
    const daiC = fetchDaiContract(wallet);
    let eth = ethers.parseEther(amount.toString());

    await weth.deposit({value:eth});
    await weth.approve(singleSwap.target , eth);

    await singleSwap.swapExactInputSingle(eth);

    let balanceofDi = await daiC.balanceOf(address);
    return ethers.formatEther(balanceofDi.toString());
}