import { Box, Button, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React from 'react'

export default function SettingsSwap() {
    const[changeCoin,setChangeCoin] = React.useState(false);
    const Android12Switch = styled(Switch)(({ theme }) => ({
        padding: 8,
        '& .MuiSwitch-track': {
          borderRadius: 22 / 2,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
          },
          '&::before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
              theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
          },
          '&::after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
              theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: 'none',
          width: 16,
          height: 16,
          margin: 2,
        },
      }));
  return (
    <Box sx={{display: "flex", flexDirection:"column" , justifyContent: "center",gap:2}}>
        {changeCoin?(
            <CoinSwap setChangeCoin = {setChangeCoin} />
        ):(
            <>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1}}>
            <Typography variant="body2">Slippage Tolerance</Typography>
            <Box sx={{display:"flex",gap:1}}>
                <Button variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize" }}>Auto</Button>
                <TextField size="small" id="filled-basic"  placeholder ="0.10%" variant="outlined" fullWidth sx={{
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
            </Box>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1}}>
            <Typography variant="body2">Slippage Tolerance</Typography>
            <Box sx={{display:"flex",gap:1}}>
                
                <TextField size="small" id="filled-basic"  placeholder ="30" variant="outlined" fullWidth sx={{
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
                <Button variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize" }}>minutes</Button>
            </Box>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"flex-end",flexDirection:"column"}}>
            <Typography variant="caption">Interface Setting</Typography>
<FormControlLabel
        control={<Android12Switch defaultChecked />}
        label="Transaction Deadline"
      />
        </Box>
            </>
        )}
        </Box>
  )
}
