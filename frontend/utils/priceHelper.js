const axios = require("axios");
const ETHERSCAN_API_KEY = "Y9KMAXB9BGD2VWKMRYTNSWQ2IXTI1P3139";

exports.getAbi  = async(address)=>{
    const url = `https://api.etherscan.io/api?module=contract&action=getabi&adress=${address}&apiKey=${ETHERSCAN_API_KEY}`;

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
    const immutables = {
        token0:token0,
        token1:token1,
        fee:fee
    }

    return immutables;
}