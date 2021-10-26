import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
function Footer() {
    return (
        <div>
            <>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" item xs={12}>
                        <Box style={{ backgroundColor: "#A1A5A6", height: "120px" }}>
                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h5" align="center" gutterBottom style={{ color: "black" }}>Formas de contato </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://www.instagram.com/jp_rood/" target="_blank">
                                    <InstagramIcon style={{ fontSize: 60, color: "black" }} />
                                </a>
                                <a href="https://github.com/Jprood" target="_black">
                                    <GitHubIcon style={{ fontSize: 50, color: "black" }} />
                                </a>
                                <a href="https://www.linkedin.com/in/joao-pedro-rocha/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 60, color: "black" }} />
                                </a>
                            </Box>
                        </Box>
                        <Box style={{ backgroundColor: "#D9D9D9", height: "60px" }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }} >Jprood©</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </>
        </div>
    )
}

export default Footer
