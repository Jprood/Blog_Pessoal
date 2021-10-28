import React from 'react';
import './Login.css';

import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
          <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid xs={6} alignItems="center">
                  <Box paddingX="20px">
                      <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="bold">
                            Entre
                        </Typography>
                        <TextField id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth/>
                        <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth/>
                      </form>
                  </Box>
                  <Box marginTop={2} textAlign="center">
                      <Link to='/home' className="textDecorationNone">
                      <Button type="submit" variant="contained" className="button-login">
                          Logar
                      </Button>
                      </Link>
                      <Box display="flex" justifyContent="center" marginTop={2}>
                          <Box marginRight={1}>
                              <Typography variant="subtitle1" gutterBottom align="center">Não possui uma conta?</Typography>
                          </Box>
                          <Typography variant="subtitle1" gutterBottom align="center" className="bold">Cadastrar-se</Typography>
                      </Box>
                  </Box>
              </Grid>
              <Grid xs={6} className="img">

              </Grid>
          </Grid>  
        </>
    )
}

export default Login
