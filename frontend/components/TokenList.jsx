import * as React from 'react';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Box, Divider, MenuList, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
export default function TokenList({ openMenu, handleCloseClick, anchorEl }) {

    return (
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseClick}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            PaperProps={{
                style: {
                    maxHeight:"70vh",
                    background: "#0F0F0F",
                    padding: "8px" 
                },
            }}
        >
            <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
                <Typography variant="caption" sx={{ color: "#FFED33", fontWeight: 600 }}>Your Token List</Typography>
            </Box>
            <MenuList >
                {[1, 2, 3, 4, 5].map((data) => {
                    return (
                            <MenuItem key = {data} sx={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                                <ListItemIcon>
                                    <Avatar sx={{ background: "#937801", fontSize: "12px" }} variant="square">
                                        HEY
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText sx={{ color: "#937801" }}>Gold Coin</ListItemText>
                                <Typography variant="body2" color="text.secondary" sx={{ color: "#937801" }}>
                                    34
                                </Typography>
                            </MenuItem>
                            
                    )
                })}
            </MenuList>
        </Menu>
    );
}