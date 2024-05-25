import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Connector, useConnect } from 'wagmi'
import SettingsIcon from '@mui/icons-material/Settings';

export default function ConnectWallet({openConnect,handleCloseConnect}) {
    const { connectors, connect } = useConnect();
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Box>
    <Dialog onClose={handleCloseConnect} open={openConnect} sx={{ background: "#0F0F0F" , overflow:"hidden"}}>
      <Box sx={{ background: "#0F0F0F", width: isSmallScreen?"40vh":"80vh",  height:isSmallScreen?"45vh":"45vh"  ,padding:"12px" ,  display: "flex", flexDirection:"column" , alignItems:"center",justifyContent:"center",gap:1}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding:"0px 12px", width:"100%" }}>
                    <Typography variant="body1" sx={{color:"white"}}>Connect Wallet</Typography>
                    <SettingsIcon fontSize="small" sx={{color:"white"}}></SettingsIcon>
                </Box>
        {   connectors.map((connector) => (
     <Button key={connector.uid} onClick={() => connect({ connector })} variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize", marginTop:"5px" , "&:hover":{background: "#1B1212", color: "#FFED33"}}} > {connector.name}</Button>
  ))}
             <Box sx={{borderTop:"1px solid #FFED33" , borderBottom:"1px solid #FFED33",marginTop:"16px" }}>
      <Typography variant="caption" sx={{color:"white"}}>By connecting your wallet to this app , you are accepting all the terms and condition provided by uniswaps labs</Typography>
      </Box>
      </Box>

            </Dialog>
        </Box>
    )
}
