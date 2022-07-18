import { ThemeProvider ,createTheme} from '@mui/material/styles'
import { CssBaseline, Grid, Paper,Box, Typography,Button, Divider, Avatar } from '@mui/material'
import React from 'react'
import Image from './static/images/loginBG.jpg'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Login = () => {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    
  return (
    <ThemeProvider theme={darkTheme}>
    <Grid container direction="row" component="main" sx={{height: "100vh"}}>
        <CssBaseline/>
       
        <Grid item sm={5} sx={{display: { xs: 'none', sm: 'grid'}}} >
            <div style={{height: "100%", backgroundImage: `url(${Image})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
            </div>
        </Grid>
        <Grid item xs={12} sm={7} >
            <Box component={Paper} py={'5%'} px={'6%'} elevation= {6} mx={'auto'} my={"4%"} sx={{alignItems: 'center',display: 'flex',flexDirection:'column',height: '90%', width: {md:'70%', xs: '90%'}}}>
                <Typography component={'h1'} variant={'h5'}>LOGIN</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                component = 'a'
                href = "/"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,backgroundColor: '#4BC5FF',color: 'white' }}
              >
                Sign In
              </Button>
                
              <Grid container direction={"row"} alignItems={'center'} my={'2%'}>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{textDecoration:"none",color: 'white'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style={{textDecoration:"none",color: 'white'}}>
                    {"New User? Sign Up"}
                  </Link>
                </Grid>
              </Grid><Divider>OR</Divider>
              <Grid container direction={'row'} justifyContent={'center'} style={{mx:'auto'}} >
                  <Grid item m={'4%'}><Avatar><GoogleIcon/></Avatar></Grid> 
                  <Grid item m={'4%'}><Avatar><FacebookIcon/></Avatar></Grid> 
                  <Grid item m={'4%'}><Avatar><LinkedInIcon/></Avatar></Grid> 
              </Grid>
            </Box></Box>

        </Grid>
    </Grid></ThemeProvider>
    
  )
}

export default Login