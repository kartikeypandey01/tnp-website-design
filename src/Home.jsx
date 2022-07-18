import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card, CardContent,  CssBaseline, Grid, Typography, Box, Badge, Divider, Avatar } from '@mui/material';
import React from 'react';
import Navbar from "./Home components/Navbar";
import FeedIcon from '@mui/icons-material/Feed';
import MyCard from './Home components/MyCard';
import Image from "./static/images/profile.jpg";


const Home = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const news = ['Belilchi Nagin Nigali', 'Chikni Chameli chupke akeli', 'Dekho Inhe yeh hai oos ki boonde','Dharrate kaat rhi h omfo', 'Baspan ka pyaar kahi bhul nhi jana re','Chikni Chameli chupke akeli','Chikni Chameli chupke akeli'];
  const related = ['sdosiidsp[pksdv', 'sdoispsovjdsdvpna dvdvds','sdpoj psddcnc vpnv','adcjoo apnop ancpdjsd', 'dcpoioj padb aisnap  oanc','adciauhapcn'];
  const posts = [
    {
      id: '254591',
      name: 'Akhilesh Shrivastav',
      imgIcon: {Image}, 
      msg: 'Excepteur consequat do do fugiat. Pariatur tempor qui consequat esse quis commodo do in voluptate excepteur sit occaecat. Dolore duis dolor veniam qui non adipisicing. Deserunt proident nisi minim veniam ut laborum quis. Id officia minim duis ipsum consectetur cupidatat excepteur minim proident ut. Id irure anim esse anim duis dolore deserunt nisi voluptate labore consequat.',
      info: 'Enim ipsum culpa veniam sit minim.',
      msglink: 'gfougplugu h kuuyf '
    },
    {
      id: '654916',
      name: 'Kartikey Pandey',
      imgIcon: {Image}, 
      msg: 'Excepteur consequat do do fugiat. Pariatur tempor qui consequat esse quis commodo do in voluptate excepteur sit occaecat. Dolore duis dolor veniam qui non adipisicing. Deserunt proident nisi minim veniam ut laborum quis. Id officia minim duis ipsum consectetur cupidatat excepteur minim proident ut. Id irure anim esse anim duis dolore deserunt nisi voluptate labore consequat. Eu aute laborum amet cupidatat excepteur ullamco tempor. Ut voluptate aliquip in voluptate proident laboris. Laborum incididunt velit in ut. Voluptate fugiat irure cupidatat sit qui qui dolore velit mollit culpa cillum elit nisi. Fugiat quis aute aute dolore proident irure consectetur anim et sint nisi. Pariatur eu ad anim laborum do cupidatat nisi adipisicing. Esse reprehenderit eiusmod et excepteur magna. Pariatur irure cupidatat veniam nulla aliquip deserunt. Nisi ad labore sint ut sunt eiusmod tempor commodo eu nisi eu. Reprehenderit exercitation tempor proident nulla Lorem adipisicing qui incididunt aute dolor esse sunt et. Eu incididunt duis culpa dolor minim nulla enim consectetur eiusmod dolor do quis.',
      info: 'Enim ipsum culpa veniam sit minim.',
      msglink: 'gfougplugu h kuuyf '
    },
    {
      id: '654916',
      name: 'Tushar Khera',
      imgIcon: {Image}, 
      msg: 'Excepteur consequat do do fugiat. Pariatur tempor qui consequat esse quis commodo do in voluptate excepteur sit occaecat. Dolore duis dolor veniam qui non adipisicing. runt. Nisi ad labore sint ut sunt eiusmod tempor commodo eu nisi eu. Reprehenderit exercitation tempor proident nulla Lorem adipisicing qui incididunt aute dolor esse sunt et. Eu incididunt duis culpa dolor minim nulla enim consectetur eiusmod dolor do quis.',
      info: 'Enim ipsum culpa veniam sit minim.',
      msglink: 'gfougplugu h kuuyf '
    },
    {
      id: '654916',
      name: 'Tushar Khera',
      imgIcon: {Image}, 
      msg: 'Excepteur consequat do do fugiat. Pariatur tempor qui consequat esse quis commodo do in voluptate excepteur sit occaecat. Dolore duis dolor veniam qui non adipisicing. runt. Nisi ad labore sint ut sunt eiusmod tempor commodo eu nisi eu. Reprehenderit exercitation tempor proident nulla Lorem adipisicing qui incididunt aute dolor esse sunt et. Eu incididunt duis culpa dolor minim nulla enim consectetur eiusmod dolor do quis.',
      info: 'Enim ipsum culpa veniam sit minim.',
      msglink: 'gfougplugu h kuuyf '
    }
    
  ]
  const profile ={
    name : 'Kartikey Pandey',
    ID : '123534',
    scholar: '19U03066',
    Branch: 'Information Technology'

  }

  return (<><ThemeProvider theme={darkTheme}>
    <CssBaseline/>
  <Navbar name='TNP'/>
  <Grid container spacing={2}  sx={{px:{md:'30px',xs:'15px'},mt:'3px',mx:'0'}} direction={{sm:"row",xs:'column-reverse' }} component="main" >
    <Grid item lg={2} sm={4} > 
    <Grid  direction="column">
      <Grid item >
        <Card sx={{minHeight:"40vh", mb: '5%'}} >
            <CardContent >
              <Box sx={{display:'flex'}}>
             <Typography variant='h6' flexGrow={1} noWrap >News:</Typography>
             <Badge badgeContent={8}  max={4} color={'error'}><FeedIcon /></Badge></Box>
             
             
             <Box sx={{overflowY: 'scroll',maxHeight:"30vh",my: '1%'}}><ul style={{paddingLeft:'20px'}}> {news.map((newsItem) => (
                  <li><Typography component={'a'} sx={{textDecoration: 'none',color:'lightgray',fontSize: '.8rem'}} href={'/'} fontSize={'1em'}>{newsItem}</Typography></li>
                ))}</ul></Box>
            </CardContent>
        </Card>
      </Grid>
      <Grid item>
      <Card  sx={{minHeight:"40vh", mb: '5%'}} >
            <CardContent >
              <Box sx={{display:'flex'}}>
             <Typography variant='h6' flexGrow={1} noWrap >Related Links:</Typography>
      </Box>          
             <Box sx={{overflowY: 'scroll',maxHeight:"30vh",my: '1%'}}><ul style={{paddingLeft:'20px'}}> {related.map((relatedItem) => (
                  <li><Typography component={'a'} sx={{textDecoration: 'none',color:'lightgray',fontSize: '.8rem'}} href={'/'} fontSize={'1em'}>{relatedItem}</Typography></li>
                ))}</ul></Box>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Grid>
    <Divider sx={{mx: 'auto'}} orientation='vertical' flexItem/>
    <Grid item sm={7} >
      <Grid container direction='column'>
      {posts.map((step) => (
          <Grid item>
              <MyCard
              id={step.id}
              name={step.name}
              imgIcon={step.imgIcon}
              msg={step.msg}
              info={step.info}
              msglink={step.msglink}
              />
          </Grid>
        ))
      }
    </Grid>
    </Grid>
    <Divider sx={{mx: 'auto' ,display: {xs: 'none',lg: 'flex'}}}  orientation='vertical'flexItem/>
    <Grid item lg={2}  px={'auto'} display={{lg:'grid',xs:'none'}}>
      <Box justifyContent={'center'} >
      <Card sx={{ minHeight: '80vh',maxWidth: '30vh', position: 'fixed',px:'1.5%',mx:'auto'}}>
        <Grid container direction='column' alignItems={'center'}>
          <Grid item >
            <Box py={'30%'}>
            <Avatar alt={profile.name} src= {Image} sx={{mx: '1%',my:'auto',height:'9vh',width:'9vh'}}/></Box>
          </Grid>
          <Grid item>
            <Typography >
                {profile.name}
            </Typography>
          </Grid>
          <Typography sx={{fontSize:'.6rem',color: 'lightgray',textAlign:'justify'}}>
            <strong>ID: </strong>{profile.ID}
            <br/>
            <strong>Scholar Number: </strong>{profile.scholar}
            <br/>
            <strong>Branch: </strong>{profile.Branch}

          </Typography>
        </Grid>
        <Grid item>
        
        </Grid>
      </Card></Box>
    </Grid>
  </Grid>
  </ThemeProvider> 
  </> )
};

export default Home;