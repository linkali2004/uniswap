import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Box, Typography} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TierBox({fee,setChecked,checked})
{
  function handleChange()
  {
    setChecked((temp)=>({...temp,[fee]:!temp[fee]}))
  }
    return (
        <Box sx={{borderRadius:"10px",border:"1px solid #FFED33",display:"flex",alignItems:"center",justifyContent:"center",gap:1,flexDirection:"column",width:{xs:"25vw",lg:"10vw"},height:{xs:"20vh",lg:"20vh"}}}>
            <Typography variant="h6" sx={{color:"white",fontWeight:"bold"}}>{fee}</Typography>
            <Typography variant="caption" sx={{color:"white",textAlign:"center"}}>Best for stable pairs</Typography>
            <Checkbox onChange={handleChange} checked={checked[fee]} icon={<BookmarkBorderIcon sx={{color:"#BD9B00"}} />} checkedIcon={<BookmarkIcon sx={{background:"#BD9B00"}} />}
      />
            </Box>
    )
}

export default function FeeTier({open,setOpen}) {
  const [checked, setChecked] = React.useState(
    {
      "0.05%":false,
      "0.01%":false,
      "1%":false,
    }
  );

  function handleClose()
  {
    setOpen(false);
  }
  return (
    <React.Fragment>
<Dialog
  open={open}
  TransitionComponent={Transition}
  keepMounted
  onClose={handleClose}
  aria-describedby="alert-dialog-slide-description"
  sx={{
    '& .MuiPaper-root': {
      backgroundColor: '#1B1212',
    },
  }}
>
  <DialogTitle sx={{color:"white"}}>{"Choose a Fee Tier from below"}</DialogTitle>
  <DialogContent>
    <Box sx={{display:"flex",gap:1.5}}>
    <TierBox fee={"0.05%"} checked={checked} setChecked={setChecked}></TierBox>
    <TierBox fee={"0.01%"} checked={checked} setChecked={setChecked}></TierBox>
    <TierBox fee={"1%"} checked={checked} setChecked={setChecked}></TierBox>
    </Box>
  </DialogContent>
</Dialog>

    </React.Fragment>
  );
}
