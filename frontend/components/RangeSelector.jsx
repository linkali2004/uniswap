import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSelector() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
  getAriaLabel={() => 'Temperature range'}
  value={value}
  onChange={handleChange}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
  sx={{
    '& .MuiSlider-thumb': {
      color: '#BD9B00',
    },
    '& .MuiSlider-track': {
      color: '#BD9B00',
    },
    '& .MuiSlider-rail': {
      color: '#BD9B00',
    },
  }}
/>
   <Box sx={{display:"flex",justifyContent:"space-around"}}>
   <Typography variant = "body1">Min - {value[0]}</Typography>
<Typography variant = "body1">Max - {value[1]}</Typography>
   </Box>
    </Box>
  );
}
