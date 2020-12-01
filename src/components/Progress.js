import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';



function Progress() {
  return (
    <Container align="center">
      <Grid container spacing={4}>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">C</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">C++</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">Python</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">Web</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">App</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">Django</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">PHP</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">JS</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">Material UI</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">Java</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">MysQl</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">ReactJS</Button>
        </Grid>
        <Grid item xs={4} sm = {4} md = {3}>
          <Button variant="outlined">materialize css</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Progress
