import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
        <Grid item xs={12} sm = {6} md = {3}>
            <Card className={classes.root}>
            <CardHeader
                title="Jyoti Enterprises"
                subheader="Materializecss,Animejs,Animatecss"
            />
            <CardMedia
                className={classes.media}
                image="jyoti.png"
                title="Jyoti Enterprises"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This is a website for an enterprise company, 
                    This company is specially working to design your home.
                </Typography>
                <Button variant="outlined" color="primary" target="_blank" href="https://jyotienterprises.netlify.app/">
                    Visit my website
                </Button>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Card className={classes.root}>
            <CardHeader
                title="Suryaflix, Clone"
                subheader="API, Reactjs,CSS"
            />
            <CardMedia
                className={classes.media}
                image="suryaflix.png"
                title="Suryaflix, Clone of Netflix"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    It is a clone of Netflix. Used TMBD API to collect different genre of movies.
                    It uses Reactjs which is integrated with TMBD API. 
                </Typography>
                <Button variant="outlined" color="primary" target="_blank" href="https://netflix-fce3e.web.app/">
                    Visit my website
                </Button>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Card className={classes.root}>
            <CardHeader
                title="Tribute to Elon Musk"
                subheader="HTML,CSS"
            />
            <CardMedia
                className={classes.media}
                image="elon.png"
                title="Elon Musk"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    It was my 1st website, a small Tribute to Elon Musk.
                    His work and potential of doing work is too great.
                </Typography>
                <Button variant="outlined" color="primary" target="_blank" href="https://tributeelonmusk.netlify.app/">
                    Visit my website
                </Button>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Card className={classes.root}>
            <CardHeader
                title="Qr code Scanner"
                subheader="HTML,Materializecss,Django"
            />
            <CardMedia
                className={classes.media}
                image="Qrcode.png"
                title="Qrcode generator"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    It uses Python library(pyqrcode) to generate Qrcode.
                    Generates QRcode in .png(pyimage is used to do it).
                </Typography>
                <Tooltip title="This website is not hosted" placement="top">
                    <span>
                        <Button variant="outlined" color="Secondary" href="#" disabled>
                            Visit my website
                        </Button>
                    </span>
                </Tooltip>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Card className={classes.root}>
            <CardHeader
                title="Small Calculator"
                subheader="Django,Materializecss"
            />
            <CardMedia
                className={classes.media}
                image="calci.png"
                title="Calculator"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    A Small calculator web app,I created while practicing for Django.
                </Typography>
                <Button variant="outlined" color="primary" target="_blank" href="https://calculaot.herokuapp.com/">
                    Visit my website
                </Button>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm = {6} md = {3}>
            <Card className={classes.root}>
            <CardHeader
                title="E-learning Website"
                subheader="HTML,Materializecss"
            />
            <CardMedia
                className={classes.media}
                image="program.png"
                title="E-learning Website"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    It's a E-learning website, which is in progress and hosted on GitHub to contribute.
                </Typography>
                <Button variant="outlined" color="primary" target="_blank" href="https://programmingknowledge.netlify.app/">
                    Visit my website
                </Button>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm = {3} >
            <Card className={classes.root}>
            <CardHeader
                title="World time app"
                subheader="Flutter,Dart"
            />
            <CardMedia
                className={classes.media}
                image="app.jpeg"
                title="Flutter App"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    A small which shows current time of different continent, Uses API to fetch the data. 
                </Typography>
                <Tooltip title="This app is not hosted" placement="top">
                    <span>
                        <Button variant="outlined" color="Secondary" href="#" disabled>
                            Visit my website
                        </Button>
                    </span>
                </Tooltip>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm = {3}>
            <Card className={classes.root}>
            <CardHeader
                title="There's more"
                subheader="Mixed"
            />
            <CardMedia
                className={classes.media}
                image="more.png"
                title="There's more to visit"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    These website is hosted on GitHub or Codepen.
                </Typography>
                <Button ><a href="https://github.com/surya7765/" target="_blank" style={{paddingLeft:'20px', textDecoration:"none"}}>Github</a></Button> 
                <Button><a href="https://codepen.io/surya7765/" target="_blank" style={{paddingLeft:'20px', textDecoration:"none"}}>Codepen.io</a></Button>          
            </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
}
