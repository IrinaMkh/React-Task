import {AppBar, Box, Button, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Header({
                                   headerData,
                                   classes,
                                   handleDrawerOpen,
                                   open,
                                   handleClickOpenDialog
                               }) {

    return (
        <AppBar
            className={classes.headerStyle}
            position="fixed"
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                >
                    <MenuIcon/>
                </IconButton>
                <img src={headerData.header_logo} alt="" width="200px" height="50px"/>
                <Box width="66%">
                    {headerData.title}
                </Box>
                <Box>
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon/>
                    </IconButton>

                    <Button variant="contained"
                            style={{backgroundColor: "green"}}
                            className={classes.margin}
                            startIcon={<MailOutlineIcon style={{color: 'white'}}/>}
                            onClick={handleClickOpenDialog}
                    >
                        <Box color="white">Email 0</Box>
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
    )

}