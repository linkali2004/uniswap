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

const addToken = [
    "0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9",
    "0x42bBFa2e77757C645eeaAd1655E0911a7553Efbc",
    "0x68749665FF8D2d112Fa859AA293F07A622782F38",
    "0xe3c408BD53c31C085a1746AF401A4042954ff740",
    "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
];


// export const fetchBooContract = (signer)=> new ethers.Contract(booToken,BooAbi,signer);
// export const fetchLifeContract = (signer) => new ethers.Contract(erc20Life,LifeAbi,signer);
// export const fetchWethContract = (signer) => new ethers.Contract(IWETH,Iweth,signer);
// export const fetchDaiContract = (signer) => new ethers.Contract("0x6B175474E89094C44Da98b954EedeAC495271d0F",Iweth,signer);

export const fetchTokenContract = (address,abi,signer) => new ethers.Contract(address,abi,signer);

export const fetchSwapSingleInput = (signer) => new ethers.Contract(swapInputSingleHop,swapSingleInput,signer);

export const gettingAllToken = async (address)=>{
    try{
       if(address != "" || address != NULL)
        {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const wallet = await provider.getSigner();
    
    
            // const booContract = fetchBooContract(wallet);
            // const wethContract = fetchWethContract(wallet);
            // const lifeContract = fetchLifeContract(wallet);
    
            const allTokensContract = addToken.map((data)=>{
                return (fetchTokenContract(data,BooAbi,wallet));
            });
    
            // const balanceOfBoo = await booContract.balanceOf(address);
            // const balanceOfLife = await lifeContract.balanceOf(address);
            // const balanceOfWeth = await wethContract.balanceOf(address);
    
            const allTokensBalance = await Promise.all(allTokensContract.map( async (data)=>{
                let temp = await data.balanceOf(address);
                temp = ethers.formatEther(temp);
                return temp;
            }));
    
            const allTokensSymbol = await Promise.all(allTokensContract.map(async (data)=>{
                const temp = await data.symbol();
                return temp;
            }));
    
    
            const allTokensName = await Promise.all(allTokensContract.map(async (data)=>{
                const temp = await data.name();
                return temp;
            }))
            return [allTokensBalance,allTokensSymbol,allTokensName];
        }
        else{
            return [];
        }
    }catch(error)
    {
        console.log(error)
    }
}


export const getAllTokensName = async ()=>{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const wallet = await provider.getSigner();

    const allTokensContract = addToken.map((data)=>{
        return (fetchTokenContract(data,BooAbi,wallet));
    });

    const allTokensSymbol = await Promise.all(allTokensContract.map(async (data)=>{
        const temp = await data.symbol();
        return temp;
    }));

    return allTokensSymbol;
}

export const getNetworkName = async ()=>
{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const networkName = await provider.getNetwork();
    return networkName;
}


export const getContractsforSwap = async (amount,address,token1,token2)=>{
    const provider = new ethers.JsonRpcProvider();
    const wallet  = await provider.getSigner();
    
    const weth = fetchWethContract(wallet);
    const singleSwap = fetchSwapSingleInput(wallet);
    const daiC = fetchDaiContract(wallet);

    const decimals0s = 18;

    let eth = ethers.parseUnits(amount.toString(),decimals0s);

    await weth.deposit({value:eth});
    await weth.approve(singleSwap.target , eth);

    await singleSwap.swapExactInputSingle(token1,token2,eth);

    let balanceofDi = await daiC.balanceOf(address);
    return ethers.formatEther(balanceofDi.toString());
}