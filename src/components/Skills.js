import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Progress from './Progress';
import {Grid} from '@material-ui/core';


export default function Skills() {

  return (
    <div>
      <CssBaseline />
      <Container align="center" maxWidth="lg" style={{marginTop:'30px', paddingBottom:'30px' }}>
        <Typography component="div">
          <Typography variant="h2"  component="h3" gutterBottom style={{fontWeight:"bold", paddingTop:'20px'}}>
            Skills
          </Typography>
          <Progress />
          <Grid container spacing={4} style={{padding:"20px"}}>
            <Grid item xs={12} sm = {6} md = {6} >
              <h2 style={{fontSize:"30px"}}>Education</h2>
              <p style={{fontSize:"15px",color:"tomato"}}>Vel tech University</p>
              <p style={{fontSize:"13px",color:"tomato"}}>2018-present</p>
              <p style={{fontSize:"12px",color:"tomato"}}>Chennai,TamilNadu(600062)</p>              
            </Grid>
            <Grid item xs={12} sm = {6} md = {6} >
              <h2 style={{fontSize:"30px"}}>Work Experience</h2>
              <p style={{fontSize:"15px",color:"tomato"}}>Intership at Khabai Tech(WFH)</p>
              <p style={{fontSize:"13px",color:"tomato"}}>Nov,2020-present</p>
              <p style={{fontSize:"12px",color:"tomato"}}>Hajipur,Patna</p>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </div>
  );
}
