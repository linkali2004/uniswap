"use client";

import { Box, Button, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import ConnectWallet from './ConnectWallet';
import { useAccount, useReadContract } from 'wagmi'
import SettingsSwap from './SettingsSwap';
import CoinSelect from './CoinSelect';
import { CoinContext } from '@/context/CoinContext';




export default function SwapSection() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [openConnect, setOpenConnect] = React.useState(false);
    const handleCloseConnect = () => {
        setOpenConnect(false);
    };
    const handleOpenConnect = () => {
        setOpenConnect(true);
    };

    const { address } = useAccount()
    const[change,setChange]=useState(false);
    
    const {swapTokens} = useContext(CoinContext);
  const[dai,setDai] = useState(0);
    const [value,setValue] = useState();

   async function handlingSwapping()
   {
    const poolAddress = "0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8";
    let result = await swapTokens(value,poolAddress)
    // setDai(result);
    console.log(result);
   }

    return (
        <Box sx={{ width: "100%", maxHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center" ,marginTop:"40px"}}>
            <Box sx={{ background: "#0F0F0F", width: "100vh",  height: change?(isSmallScreen?"40vh":"55vh"):(isSmallScreen?"30vh":"45vh"), borderRadius: "14px" ,padding:"12px" ,  display: "flex", flexDirection:"column" , justifyContent: "center"}}>
                <Box sx={{ display: "flex", justifyContent: "space-between", padding: "12px" }}>
                    <Typography variant="body1">{change?"Make Changes":"Swap"}</Typography>
                    <SettingsIcon fontSize="small" onClick={()=>{
                        setChange((change)=>(!change))
                    }}></SettingsIcon>
                </Box>
  <Box>
       {change?(
            <>
            <SettingsSwap></SettingsSwap>
            </>
           ):(
            <>
              <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"10px"}}>
              <Box sx={{display:"flex",gap:2 ,alignItems:"center"}}>
                      <TextField onChange={(e)=>setValue(e.target.value)} size="small" type="number" id="filled-basic" placeholder ="0"  variant="outlined" sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#FFED33',
                            },
                            '&:hover fieldset': {
                                borderColor: '#FFED33',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#FFED33',
                            },
                            '& input': {
                                color: '#BD9B00', // Text color
                                padding: '10px 8px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#BD9B00', // Label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#BD9B00', // Label color when focused
                        },
                    }} />
                    <CoinSelect whichOne = "firstOne"></CoinSelect>
                      </Box>
                      <Box sx={{display:"flex",gap:2,alignItems:"center"}}>
                      <TextField value={dai} onChange={(e)=>setDai(e.target.value)} size="small" type="number" id="filled-basic" placeholder ="0"  variant="outlined" sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#FFED33',
                            },
                            '&:hover fieldset': {
                                borderColor: '#FFED33',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#FFED33',
                            },
                            '& input': {
                                color: '#BD9B00', // Text color
                                padding: '10px 8px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#BD9B00', // Label color
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#BD9B00', // Label color when focused
                        },
                    }} />
                    <CoinSelect whichOne ="secondOne"></CoinSelect>
                      </Box>
                    </Box>
                   <Box sx={{display:"flex",justifyContent:"center" , marginTop:"10px"}}>
                 {address?(
                      <Button onClick={handlingSwapping} variant="contained" sx={{ background: "#FFED33", color: "#1B1212", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } , borderRadius:"14px" }}>Swap</Button>
                 ):(
                    <Button onClick={handleOpenConnect} variant="contained" sx={{ background: "#FFED33", color: "#1B1212", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } , borderRadius:"14px" }}>Connect Wallet</Button>
                 )}
                    </Box>
            </>
           )}
            </Box>
            <ConnectWallet openConnect={openConnect} handleCloseConnect={handleCloseConnect}></ConnectWallet>
  </Box>
        </Box>
    )
}
