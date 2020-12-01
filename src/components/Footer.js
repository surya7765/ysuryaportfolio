import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';
import './Footer.css';


function Footer() {
    return (
        <Container align="center" className="modify_container" >
            <section >
                <p style={{fontSize:"24px",paddingTop:"20px"}}>Hi! there, want to get in touch with me?</p>
            <div style={{paddingBottom:"20px"}}>
                <form action="mailto:suryayugandhar300@gmail.com">
                    <input type="email" name="email" placeholder="message" style={{margin:"10px", padding: "8px 20px", border: "1px solid #fff", borderRadius:"2px" }} required />
                    <Button variant="outlined" color="Secondary" style={{margin:"10px"}}>
                        Mail Me
                    </Button>
                </form>
            </div>
            </section>
            <Grid container spacing={4} >
                <Grid item xs={6} sm = {4} md = {4} >
                    <h2 style={{fontSize:"30px"}}>Follow Me</h2>
                    <a href="https://github.com/surya7765/" target="_blank" style={{fontSize:"15px",color:"tomato",paddingLeft:'20px', textDecoration:"none"}}>Github</a><br/>
                    <a href="https://codepen.io/surya7765/" target="_blank" style={{fontSize:"15px",color:"tomato",paddingLeft:'20px', textDecoration:"none"}}>Codepen</a><br/>
                    <a href="https://instagram.com/theyugandhar?igshid=eqva81gq1zx" target="_blank" style={{fontSize:"15px",color:"tomato",paddingLeft:'20px', textDecoration:"none"}}>Instagram</a><br/>
                    <a href="https://stackoverflow.com/users/12729031/yugandhar-surya" target="_blank" style={{fontSize:"15px",color:"tomato",paddingLeft:'20px', textDecoration:"none"}}>StackOverflow</a><br/>
                    <a href="https://www.linkedin.com/in/yugandhar-surya/" target="_blank" style={{fontSize:"15px",color:"tomato",paddingLeft:'20px', textDecoration:"none"}}>LinkedIn</a><br/>
                </Grid>
                <Grid item xs={6} sm = {4} md = {4} >
                    <h2 style={{fontSize:"30px"}}>Contact</h2>
                    <p style={{fontSize:"15px",color:"tomato"}}>Samastipur,Bihar</p>
                    <p style={{fontSize:"15px",color:"tomato"}}>7667941731</p>
                    <p style={{fontSize:"15px",color:"tomato"}}>Chennai,TamilNadu (Work)</p>
                </Grid>
                <Grid item xs={6} sm = {4} md = {4} >
                    <h2 style={{fontSize:"30px"}}>Subscribe</h2>
                    <a href="https://www.youtube.com/channel/UCctmOiE79moM8wPZ1RxzhSQ" target="_blank" style={{fontSize:"15px",color:"tomato",paddingLeft:'20px', textDecoration:"none"}}>YouTube</a><br/>
                    <a href="https://instagram.com/programming_knowledge__?igshid=1nmzfwm5ithuw" target="_blank" style={{fontSize:"15px",color:"tomato",paddingLeft:'20px', textDecoration:"none"}}>Instagram</a><br/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer
