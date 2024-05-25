import { Box, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function CoinSwap({setChangeCoin}) {
  return (
<>
<Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } , marginBottom:"14px" }} size="small" onClick={()=>{setChangeCoin(false);}}>Back</Button>
    <Box sx={{display: "flex" , justifyContent: "center",gap:2,flexWrap:"wrap"}}>
        <Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>ETH</Button>
        <Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>DAI</Button>
        <Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>DOG</Button>
        <Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>FUN</Button>
        <Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>UNI</Button>
        <Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>TIME</Button>
        <Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>LOO</Button>
        <Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>HEY</Button>
        <Button variant="outlined" sx={{ borderColor: "#FFED33", color: "#FFED33", textTransform: "capitalize", "&:hover": { background: "#FFED33", color: "#1B1212" } }} size="small" startIcon={<Image src="/ethereum-eth-logo.png" width={20} height={20} alt="eth" />}>OOO</Button>
        </Box>
</>
  )
}
