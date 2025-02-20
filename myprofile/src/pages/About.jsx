import React from 'react';
import { Container, Box, Paper, Typography } from "@mui/material";

export function About() {
  return (
    <Box
      style={{
        
        backgroundImage: 'url("https://img.goodfon.com/original/1920x1280/0/3b/avstraliya-solnce-siluety.jpg")',
        backgroundSize: 'cover', // Ensure the image covers the entire viewport
        backgroundPosition: 'center', // Center the image
        width: "100vw",
        backgroundAttachment: 'fixed', // Make the background image fixed when scrolling
        height: 'calc(100vh - 80px)', // Make the div fill the entire viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
    >
      <Paper elevation={5} sx={{
        position: "relative",
        width: "90%",
        height: "90%",
        backgroundColor: "#ADD8E6",
        padding: "10px"
      }}>
        <Paper style={{marginBottom: "5px", padding: "5px"}}>
          <Typography variant="h3">
              About Me
          </Typography>
        </Paper>
   
        <hr></hr>

        <Box style={{marginTop: "5px", padding: "5px"}}>
          <img style={{zIndex: "1", width: "250px", height: "170px"}} src="/profile/dog.png" alt="Dog" />
          <br></br>
          <Typography backgroundColor>
            
          </Typography>
  
        </Box>

        <br></br>

        <Paper elevation={3} style={{padding: "5px"}}>
          <Typography backgroundColor>
            Hi Guys! My name is Auston Yang and I'm a 4th year (I know I'm old but allow it 😭) studying Actuarial Studies and Computer Science! As I've gone through the years, I've been in a pickle
            about what I want to study in the future. However, I have a better idea now. I'm most interested in frontend development and also machine learning. I hope to do more projects and create web-based games for my friends. 
          </Typography>
        </Paper>

        <br></br>

        <Paper elevation={3} backgroundcolor={"#FFFDD0"} style={{padding: "5px"}}>
          <Typography>
            <b>Fun Facts</b>
          </Typography>
          <ul style={{marginLeft: "40px", position: "relative"}}>
            <Typography>
              <li>I can juggle</li>
              </Typography>
            <Typography><li>I can raise one eyebrow without raising the other</li></Typography>
            <Typography><li>I've broken my wrist trying to dunk a basketball 2 months before the HSC</li></Typography>
            <Typography><li>I've never lost a fight against a silverback gorilla</li></Typography>
            <Typography><li>My left thumb can fold to 90 degrees</li></Typography>
          </ul>
        </Paper>

        

      </Paper>
    </Box>
  );
}
