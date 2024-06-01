const { ethers, toBigInt } = require('ethers');

// Output hex string from transaction
const hexOutput = "0xf7729d430000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000bb8000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000";

// Extract the relevant portion of the hex string (amount of DAI)
const amountHex = hexOutput.slice(-64);
const amount = toBigInt(amountHex)
const amountInDai = ethers.formatUnits(amount, 18); // Assuming DAI has 18 decimals

console.log("Amount of DAI:", amountInDai);