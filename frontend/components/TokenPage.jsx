import React, { useEffect, useState } from 'react'
import {Box, Button, InputAdornment, TextField, Typography} from "@mui/material";
import DataTable from './DataTable';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

export default function TokenPage() {
  const [tokenList,setTokenList] = useState(
    [
      {
          name:"Ether ETH",
          price:"$12,345",
          change:"+234.5",
          tvl:"$7894.5M",
          volume:"$716.5M"
      },
      {
          name:"USDC COIN",
          price:"$12,345",
          change:"+234.5",
          tvl:"$7894.5M",
          volume:"$716.5M"
      },
      {
          name:"Wrapped BTC WBTC",
          price:"$12,345",
          change:"+234.5",
          tvl:"$7894.5M",
          volume:"$716.5M"
      },
      {
          name:"Uniswap UNI",
          price:"$12,345",
          change:"+234.5",
          tvl:"$7894.5M",
          volume:"$716.5M"
      }
  ]
  );

  const[copyTokenList,setCopyTokenList] = useState(tokenList);
  const[search,setSearch] = useState("");
  const[searchItem,setSearchItem] = useState(search);

  const handleSearch = (value)=>{
    const filteredTokens = tokenList.filter(({name})=>
    name.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredTokens.length == 0)
      {
        setTokenList(copyTokenList);
      }
      else
      {
        setTokenList(filteredTokens);
      }
  }
  const onClear = ()=>{
    if(tokenList.length && copyTokenList.length)
      {
        setTokenList(copyTokenList);
      }
  }

  useEffect(()=>{
    const timer = setTimeout(()=>setSearch(searchItem),1000);
    return ()=> clearTimeout(timer);
  },[searchItem]);
    
  useEffect(()=>{
    if(search)
      {
        handleSearch(search);
      }
      else
      {
        onClear();
      }
  },[search]);

  return (
<Box sx={{width:"100%" , height:"100%"}}>
  <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:3}}>
  <Typography variant="h6">Top Tokens on Uniswap</Typography>
  <Box sx={{display:"flex",gap:{xs:2,lg:3}}}>
  <Button   startIcon={<Image src="/ethereum-eth-logo.png" alt="eth" width={15} height={15} />} variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize" }}>Ethereum</Button>
  <TextField value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} size="small"  placeholder ="tokens..."  variant="outlined" sx={{
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
                    }} 
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><SearchIcon sx={{color:"white"}} /></InputAdornment>,
                    }}
                    />
  </Box>
  <Box sx={{background:"#1B1212",width:"60vw"}}>
    <DataTable tokens={tokenList}></DataTable>
  </Box>
  </Box>
    </Box>
  )
}
