"use client";

import { Box, Button, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import ConnectWallet from './ConnectWallet';
import { useAccount } from 'wagmi'
import SettingsSwap from './SettingsSwap';
import CoinSwap from "./CoinSwap";

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
  

    return (
        <Box sx={{ width: "100%", maxHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center" ,marginTop:"40px"}}>
            <Box sx={{ background: "#0F0F0F", width: "100vh",  height: change?(isSmallScreen?"40vh":"55vh"):(isSmallScreen?"25vh":"35vh"), borderRadius: "14px" ,padding:"12px" ,  display: "flex", flexDirection:"column" , justifyContent: "center"}}>
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
                    <TextField size="small"  type="number" id="filled-basic"  placeholder ="0" variant="outlined" sx={{
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
                    }} InputProps={{
                        endAdornment: <InputAdornment position="end"><Button variant="contained" sx={{ background: "#FFED33", color: "#1B1212", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>ETH</Button></InputAdornment>,
                    }} />
                    <TextField size="small" type="number" id="filled-basic" placeholder ="0"  variant="outlined" sx={{
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
                    }} InputProps={{
                        endAdornment: <InputAdornment position="end"><Button variant="contained" sx={{ background: "#FFED33", color: "#1B1212", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>ETH</Button></InputAdornment>,
                    }} />
                    </Box>
                   <Box sx={{display:"flex",justifyContent:"center" , marginTop:"10px"}}>
                 {address?(
                      <Button variant="contained" sx={{ background: "#FFED33", color: "#1B1212", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } , borderRadius:"14px" }}>Swap</Button>
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
