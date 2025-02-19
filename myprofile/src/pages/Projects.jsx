import { Container, Box, Paper, Typography } from "@mui/material";

export function Projects() {
  return (
    <Box
      style={{
        
        backgroundImage: 'url("https://storage.googleapis.com/jpn-new-wp/uploads/2021/08/f4526278-image_tokyo.jpg")',
        backgroundSize: 'cover', // Ensure the image covers the entire viewport
        backgroundPosition: 'center', // Center the image
        width: "100vw",
        backgroundAttachment: 'fixed', // Make the background image fixed when scrolling
        height: 'auto', // Make the div fill the entire viewport height
        // filter: "brightness(50%)",
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
              Projects
          </Typography>
        </Paper>
        <Paper style={{marginBottom: "5px", padding: "5px"}}>
          <Typography variant="h6">
              I have none. You guys can change that. Pls pls pls Pls pls pls Pls pls pls Pls pls pls Pls pls pls Pls pls pls Pls pls pls Pls pls pls. Pls let me in 🙏. 
          </Typography>
        </Paper>


        <Paper style={{marginBottom: "5px", padding: "5px", position: "relative"}}>
          <img src="https://betanews.com/wp-content/uploads/2015/08/Beg-1200x672.jpg" style={{ margin: "0px 10px", width: "90%", height: "auto" }} />
        </Paper>

      </Paper>
    </Box>
  );
}
