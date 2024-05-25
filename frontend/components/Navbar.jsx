"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Avatar, Backdrop,Stack, TextField, useMediaQuery } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import TokenList from './TokenList';
import { Close } from '@mui/icons-material';

export default function Navbar() {
    const [value, setValue] = React.useState(0);
    const { address } = useAccount()
    const { disconnect } = useDisconnect()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const isSmallScreen = useMediaQuery('(max-width:600px)');


    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseClick = () => {
      setAnchorEl(null);
    };


    console.log(isSmallScreen)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: "transparent" }} elevation={0}>
                <Toolbar sx={{ background: "transparent" }} elevation={0}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 , flexGrow:isSmallScreen?1:0}}
                    >
                        <Image src="/uniswap-uni-logo.png" width={60} height={60} alt="uniswap"></Image>
                    </IconButton>
                    {isSmallScreen ? (
                        <MenuIcon  sx={{ color: "#FFED33"}}   onClick={handleOpen}></MenuIcon>
                    ) : (
                        <>
                        <Box sx={{ flexGrow: 1 }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Swap" sx={{ color: "#937801", textTransform: "capitalize",fontSize: "16px", fontWeight: "bold" }} />
                            <Tab label="Tokens" sx={{ color: "#937801", textTransform: "capitalize" }} />
                            <Tab label="Pools" sx={{ color: "#937801", textTransform: "capitalize" }} />
                        </Tabs>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize" }}>Network Name</Button>
                        {address?(
                        <>
                          <Button variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize" }} >Disconnect</Button>
                          <Button variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize" }}  onClick={handleClick}>{address.substr(0,12) + "..."}</Button>
                        </>  
                        ):(
                          <></>
                        )}
                    </Stack>

                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1,display:"flex",flexDirection:"column",gap:"50px"}}
                open={open}
            >
                <Avatar sx={{background:"#937801"}} onClick={handleClose} >
                    <Close></Close>
                </Avatar>
                <Box>
                <List sx={{marginBottom:"12px"}}>
          <ListItem disablePadding>
            <ListItemButton sx={{background:"#FFED33",marginBottom:"8px"}}>
              <ListItemText primary="Swap" sx={{ color: "#1B1212", textTransform: "capitalize",fontSize: "22px", fontWeight: "bold"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{background:"#FFED33",marginBottom:"8px"}}>
              <ListItemText primary="Tokens" sx={{ color: "#1B1212", textTransform: "capitalize",fontSize: "22px", fontWeight: "bold"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{background:"#FFED33",marginBottom:"8px"}}>
              <ListItemText primary="Pools" sx={{ color: "#1B1212", textTransform: "capitalize",fontSize: "22px", fontWeight: "bold"}}/>
            </ListItemButton>
          </ListItem>
        </List>

        <Stack direction="column" spacing={1}>
        <Button variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize"}}  >Network Name</Button>
                        {address?(
                        <>
                          <Button variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize" }} onClick={disconnect}>Disconnect</Button>
                          <Button variant="contained" sx={{ background: "#1B1212", color: "#FFED33", textTransform: "capitalize" }} onClick={handleClick} >{address.substr(0,12) + "..."}</Button>
                        </>  
                        ):(
                          <></>
                        )}
                    </Stack>
                </Box>
            </Backdrop>
           <TokenList openMenu={openMenu} handleCloseClick={handleCloseClick} anchorEl={anchorEl}></TokenList>
        </Box>
    );
}
