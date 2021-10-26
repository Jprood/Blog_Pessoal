import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { InputAdornment, TextField } from '@material-ui/core';
import Search from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#F2B138" }}>
                <Toolbar variant="dense">
                    <MenuIcon/>
                    <Box style={{ cursor: "pointer" }}>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box ml="auto">
                        <TextField id="input-with-icon-textfield" InputProps={{
                            startAdornment: (<InputAdornment position="start"><Search />
                            </InputAdornment>
                            ),
                        }}
                            variant="standard"
                        />
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
