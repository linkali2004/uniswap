 import React, { useState } from 'react'
 import {Box, Button, InputAdornment, TextField, Typography} from "@mui/material";
 import SettingsIcon from '@mui/icons-material/Settings';
import Image from 'next/image';
import WalletIcon from '@mui/icons-material/Wallet';
import RangeSelector from './RangeSelector';
import PoolDisplay from './PoolDisplay';
import FeeTier from './FeeTier';

 export default function PoolPage() {
    const [open,setOpen] = useState(false);
   return (
<Box sx={{display:"flex",width:"100%",alignItems:"center",justifyContent:"center"}}>
<Box sx={{width:{xs:"100vw",lg:"60vw"},height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor: '#1B1212',borderRadius:"10px",padding:"12px",flexDirection:"column",gap:3}}>
  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%" }}>
  <Typography variant="caption" sx={{color:"#BD9B00"}}>Clear All</Typography>
  <Typography variant="body1">Add Liquidity</Typography>
  <SettingsIcon></SettingsIcon>
  </Box>
  <Box sx={{display:"flex",justifyContent:"space-around",flexDirection:{xs:"column",lg:"row"},gap:{xs:2}}}>
  <Box sx={{width:{xs:"80vw",lg:"30vw"},gap:2,display:"flex",flexDirection:"column",alignItems:"center"}}>
  <Typography variant="caption" sx={{color:"white",fontWeight:"bold"}} >Select Pair</Typography>
  <Box sx={{display:"flex" , gap:1.5,width:"100%" ,justifyContent:"center"}}>
  <Button  startIcon={<Image src="/ethereum-eth-logo.png" alt="eth" width={15} height={15} />} variant="contained" sx={{background: "#FFED33", color: "#1B1212", textTransform: "capitalize" }}>UNI</Button>
  <Button  startIcon={<Image src="/ethereum-eth-logo.png" alt="eth" width={15} height={15} />} variant="contained" sx={{ background: "#FFED33", color: "#1B1212", textTransform: "capitalize" }}>WETH</Button>
  </Box>
  <Box sx={{borderRadius:"10px",border:"1px solid #FFED33",display:"flex",justifyContent:"space-between",alignItems:"center",width:"80%",padding:"10px"}}>
    <Box>
    <Typography variant="caption" sx={{color:"white",fontWeight:"bold"}}>Select Pair</Typography>
    <br></br>
    <Typography variant="caption" sx={{color:"white"}}>The % you will earn in fees</Typography>
    </Box>
    <Button onClick={()=>{setOpen((open)=>!open)}} variant="contained" sx={{background: "#FFED33", color: "#1B1212", textTransform: "capitalize" ,width:"30px",height:"30px"}}>show</Button>
  </Box>
  <Box sx={{display:"flex",gap:1}}>
                
                <TextField size="small" id="filled-basic"  placeholder ="0" variant="outlined"  sx={{
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
                            padding:"15px 8px"
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#BD9B00', // Label color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#BD9B00', // Label color when focused
                    },
                }}         InputProps={{
                    endAdornment: <InputAdornment position="end"><Button variant="contained" sx={{ background: "#BD9B00", color: "#1B1212", textTransform: "capitalize" }}>Uniswap</Button></InputAdornment>,
                  }} />
            </Box>
            <Box sx={{display:"flex",gap:1}}>
                
                <TextField size="small" id="filled-basic"  placeholder ="0" variant="outlined"  sx={{
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
                            color: '#BD9B00',
                            padding:"15px 18px"

                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#BD9B00', // Label color
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#BD9B00', // Label color when focused
                    },
                }}         InputProps={{
                    endAdornment: <InputAdornment position="end"><Button variant="contained" sx={{ background: "#BD9B00", color: "#1B1212", textTransform: "capitalize" }}>Ether</Button></InputAdornment>,
                  }} />
            </Box>
  </Box>
  <Box sx={{width:{xs:"80vw",lg:"30vw"},gap:2,display:"flex",flexDirection:"column",alignItems:"center"}}>
  <Typography variant="caption" sx={{color:"white",fontWeight:"bold"}}>Select Price Range</Typography>
  <Box sx={{display:"flex" , gap:1,width:"100%" ,flexDirection:"column",alignItems:"center"}}>
  <Typography variant="caption" sx={{color:"white"}}>Current Price 41.194 test4 per WETH</Typography>
  <WalletIcon sx={{ color: "#BD9B00", fontSize: "80px" }} />
  <Typography variant="body1" sx={{color:"white",fontWeight:"bold"}}>Your position will appear here</Typography>
  <RangeSelector></RangeSelector>
  </Box>
  </Box>
  </Box>
  <PoolDisplay></PoolDisplay>
  </Box>
  {open && <FeeTier open={open} setOpen={setOpen}></FeeTier>}
    </Box>
   )
 }
 