import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CoinContext } from '@/context/CoinContext';

export default function CoinSelect({whichOne}) {
  const {btnProp,setBtnProp} = React.useContext(CoinContext);

  const Coins = ["WETH", "USDC", "DAI", "BOO", "LIFE"];

  const[value ,setValue] = React.useState(Coins[0]);
  const handleChange = (event) => {
    setValue(event.target.value);
    setBtnProp((btnProp) => ({
        ...btnProp,
        [whichOne]: event.target.value
      }));
      
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 ,padding:"10px 0px"}} size="small">
      <Select
        value={value}
        defaultValue={Coins[0]}
        onChange={handleChange}

        sx={{
            borderColor: '#FFED33', 
            color: '#FFED33',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FFED33', 
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FFED33', 
            },
            '& .MuiSvgIcon-root': {
              color: '#FFED33',
            },
            '& .MuiSelect-select': {
                backgroundColor:  '#1B1212'
              }
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: '#1B1212',
              },
            },
          }}
      >
      {Coins.map((data,index)=>{
        return (
            <MenuItem value={data} key = {data+index} sx={{ backgroundColor: '#1B1212', color: '#FFFFFF' }}>{data}</MenuItem>
        )
      })}
      </Select>
    </FormControl>
  );
}
