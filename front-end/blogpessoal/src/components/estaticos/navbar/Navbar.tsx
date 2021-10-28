import React from 'react';
import './Navbar.css';

import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#F2B138"}}>
                <Toolbar variant="dense">
                    <Box>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-around" ml="alto" width="100%">
                        <Link to="/home" className="text-decoration-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                       <Link to='/login' className="text-decoration-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                       </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
