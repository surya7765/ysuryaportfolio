import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Project.css';
import Cards from './Cards';
import Skills from './Skills';




export default function Project() {

  return (
    <div className="container">
      <CssBaseline />
      <Container maxWidth="lg" style={{marginTop:'30px', paddingBottom:'30px'}}>
        <Typography component="div">
          <Typography variant="h2" align="center" component="h3" gutterBottom style={{ fontWeight:"bold", color: 'white', padding:'30px'}}>
            Projects
          </Typography>
              <Cards />
              <Skills />
        </Typography>
      </Container>
    </div>
  );
}
