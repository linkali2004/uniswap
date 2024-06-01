const axios = require("axios");
const ETHERSCAN_API_KEY = "Y9KMAXB9BGD2VWKMRYTNSWQ2IXTI1P3139";

exports.getAbi  = async(address)=>{
    const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apiKey=${ETHERSCAN_API_KEY}`;

    const res = await axios.get(url);
    const abi = JSON.parse(res.data.result);
    return abi;
}

exports.getPool = async (poolContract)=>{
    const[token0,token1,fee] = await Promise.all([
        poolContract.token0(),
        poolContract.token1(),
        poolContract.fee()
    ]);
    console.log(fee);
    const immutables = {
        token0:"0x6B175474E89094C44Da98b954EedeAC495271d0F",
        token1:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        fee:fee
    }

    return immutables;
}