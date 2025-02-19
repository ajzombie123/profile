import React from 'react';
import { Container, Box, Paper, Typography } from "@mui/material";

export function ChinaTrip() {
  return (
    <Box
      style={{
        backgroundImage: 'url("https://www.discoverhongkong.com/content/dam/dhk/intl/greater-bay-area/zhaoqing/header16_9.jpg")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width: "100vw",
        backgroundAttachment: 'fixed',
        height: 'auto',

      
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
        padding: "10px",
        backgroundColor: "#ADD8E6",
      }}>

        <Paper style={{marginBottom: "5px", padding: "5px"}}>
          <Typography variant="h3">
              My China Trip!
          </Typography>
        </Paper>

        <Paper style={{display: "flex", justifyContent: "center"}}>
            {/* <video
            src="IMG_1307.MOV"
            style={{ width: "50%", height: "auto" }}
            controls
          /> */}
          <img src="IMG_0696.JPG" style={{width: "40%", height: "auto" }} />
        </Paper>

        <Paper style={{margin: "10px 0px", padding: "5px"}}>
          {/* Above are the Lunar New Year fireworks that we saw in person! */}
          Here are the ducks we saw near the lake!
        </Paper>

        <Box style={{width: "100%", height: "90%", backgroundColor: "light-red", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "5px"}}>
          <img src="IMG_1392.JPG" style={{width: "100%", height: "auto" }} />
          <img src="IMG_1377.JPG" style={{width: "100%", height: "auto" }} />

          <img src="IMG_0968.JPG" style={{width: "100%", height: "auto" }} />
          <img src="IMG_0966.JPG" style={{width: "100%", height: "auto" }} />
          <img src="IMG_0826.JPG" style={{width: "100%", height: "auto" }} />

          <img src="IMG_0766.jpg" style={{width: "100%", height: "auto" }} />
        </Box>

        <Paper style={{margin: "10px 0px", padding: "5px"}}>
          Above are snippets of CNY in Zhaoqing China. We were able to set fireworks ourselves because it's legal to buy and set. We were able to walk the streets where we saw many Lion Dances. By the time we were done, the streets were all smokey and overall it was a surreal feeling!
        </Paper>

      </Paper>
    </Box>
  );
}
