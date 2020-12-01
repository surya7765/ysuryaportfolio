import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Grid} from '@material-ui/core';
import './About.css';



export default function About() {

  return (
    <Container>
      <CssBaseline />
      <Container maxWidth="lg" style={{marginTop:'30px'}}>
        <Typography component="div" style={{  height: '90vh'}}>
          <Typography variant="h2" align="center" component="h3" gutterBottom style={{fontWeight:"bold", color: 'darkblue', paddingTop:'5px'}}>
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm = {6} md = {6}>
             <img className="img" alt="Yugandhar Surya" src="surya.png"/>
             </Grid>
            <Grid item xs={12} sm = {6} md = {6}>
              <p className="details" style={{color:"#420F89" , fontSize:'18px'}}>
                The ability to understand and design creations that would beautifully unfold to a more
                simplistic and alluring life.
                Eager to learn new skill is my hobby and with teams, I learned a lot. Working on innovative ideas
                gives me more courage to help others that makes me work harder. Sharing to open source community has 
                always fun.
              </p>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </Container>
  );
}
