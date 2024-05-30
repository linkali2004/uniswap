import { Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import WalletIcon from '@mui/icons-material/Wallet';
import React from 'react'
import { useAccount } from 'wagmi';

export default function PoolDisplay() {
    const {address} = useAccount();
  return (
    <Box sx={{width:"100%"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%" }}>
    <Typography variant="h6" sx={{fontWeight:"bold"}}>Pool</Typography>
    <Button startIcon={<AddIcon></AddIcon>} variant="contained" sx={{ background: "#FFED33", color: "#1B1212", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } , borderRadius:"14px" }}>New Position</Button>
    </Box>
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:1.5}}>
    <WalletIcon sx={{ color: "#BD9B00", fontSize: "80px" }} />
    <Typography variant="caption" sx={{fontWeight:"bold"}}>Your active V3 liquidity will show here</Typography>
    {address ? ( <Button variant="contained" sx={{ background: "#FFED33", color: "#1B1212", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } , borderRadius:"14px" }}>Connect Wallet</Button>):(<></>)}
    <Box sx={{display:"flex",gap:2,marginTop:"20px"}}>
    <Box sx={{borderRadius:"10px",border:"1px solid #FFED33",padding:"10px",display:"flex",flexDirection:"column"}}>
    <Typography variant="caption" sx={{fontWeight:"bold"}}>Learn about providing Liquidity</Typography>
    <Typography variant="caption">Check out our v3 LP walkthrough and migrate guide</Typography>
        </Box>
        <Box sx={{borderRadius:"10px",border:"1px solid #FFED33",padding:"10px",display:"flex",flexDirection:"column"}}>
    <Typography variant="caption" sx={{fontWeight:"bold"}}>Top Pools</Typography>
    <Typography variant="caption">Explore uniswap pool analytics</Typography>
        </Box>
        </Box>
    </Box>
    </Box>
  )
}
