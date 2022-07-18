import React, { useState } from 'react'
import { Avatar,  Grid, Typography,Box, Paper,Tooltip, IconButton,Button } from '@mui/material';
import Link from '@mui/material/Link';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


function MyCard(props) {
  const imgUrl = props.imgIcon;
  const userId = props.id;
  const userName = props.name;
  const userInfo = props.info;
  const usermsg = props.msg;
  const msgLink = props.msglink;
  const [isActive,setIsActive]=useState(false);
  const handleClickBell=()=>{
    setIsActive(current => !current);
  }
  return (
      <Box mb={'5%'}>
          <Paper sx={{mb:'.5%'}}>
            <Grid container  sx={{padding:'1%'}}>
             <Grid item px={'1%'} my={'auto'} >
            <Avatar alt={userName} src= {imgUrl} sx={{mx: '1%',my:'auto',height:'6vh',width:'6vh'}}/></Grid>
            <Grid  flexGrow={1} my={'auto'} item px={'1%'}>
                <Typography sx={{fontSize: '.8rem', fontWeight:'400'}}>{userName}</Typography>
                
                <Typography sx={{fontSize: '.6rem',color:'gray' ,fontWeight:'200'}} >ID: {userId}</Typography>
               <Typography sx={{fontSize: '.6rem',color:'gray',fontWeight:'200'}}>{userInfo}</Typography>
            </Grid>
            <Grid item px={'1%'}  my={'auto'}>
              <Typography sx={{fontSize: '.6rem',color:'gray' ,fontWeight:'200'}}>Date: 21/05/22</Typography> 
              <Typography sx={{fontSize: '.6rem',color:'gray' ,fontWeight:'200'}}>Time: 03:45 PM</Typography> 
            </Grid>
            </Grid>
          </Paper>
          <Paper>
            <Box p='2% 3%'>
              <Typography sx={{fontSize:'.8rem'}}>
                {usermsg}
              </Typography>
            </Box>
            <Box p='1% 3%'>
              <Link href="#" variant="body2">
                {msgLink}
              </Link>
            </Box>
            <Paper elevation={3} sx={{p:'1% 3%'}}>
              <Grid container direction='row'>
                <Grid item flexGrow={1} sx={{my:'auto'}}>
                  <Box sx={{display:'flex',my:'auto'}}>
                  <Box sx={{display:{sm:'grid',md:'flex'},mr:'10px'}}>
                <Tooltip title="Views">
                  <RemoveRedEyeOutlinedIcon/>
                </Tooltip>
                <Typography sx={{fontSize:'0.6rem',textAlign:'center', my:'auto'}} >123</Typography></Box>
                <Box sx={{display:{sm:'grid',md:'flex'},mr:'10px',my:'auto'}}><Tooltip title="Submissions">
                  <TelegramIcon />
                </Tooltip>
                <Typography sx={{fontSize:'0.6rem',textAlign:'center' ,my:'auto'}}>100</Typography></Box>
                </Box></Grid>
                <Grid item>
                  <Box display={'flex'}>
                  <Tooltip title="Remind Me Later" >
                    <IconButton sx={{mr:'8px' ,color: isActive?'orange':''}} onClick={handleClickBell}>
                    <NotificationsActiveIcon/>
                    </IconButton>
                  </Tooltip>
                  <Button
                    component = 'a'
                    href = {msgLink}
                    variant="contained"
                    sx={{ backgroundColor: '#4BC5FF',color: 'white' }}
                  >
                    Apply Now
                  </Button></Box>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
      </Box>
  )
}

export default MyCard