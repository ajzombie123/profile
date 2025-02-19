import { Container, Box, Paper, Typography } from "@mui/material";

export function Hobbies() {
  return (
    <Box
      style={{
        
        backgroundImage: 'url("https://www.welcometofrance.com/app/uploads/2019/12/alexander-kagan-t9Td0zfDTwI-unsplash-1920x1280.jpg")',
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
        backgroundColor: "#ADD8E6",
        padding: "10px"
      }}>
        <Paper style={{marginBottom: "5px", padding: "5px"}}>
          <Typography variant="h3">
              Hobbies
          </Typography>
        </Paper>

        <Paper style={{marginBottom: "5px", padding: "5px"}}>
          <Typography variant="h5">
            <u>Basketball</u>
          </Typography>
          <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Typography variant="h6">
              My top 1 sport of all time. I've been playing basketball since year 7 in 2016 so it has been 8 years 🤯. 
              I now play a social competition every sunday, and we recently won the championship! (Letsgooo)
              Always happy to grab friends and go shoot around whenever I have time 😃
            </Typography>
            <img src="bballcourt.JPG" style={{width: "150px", height: "150px", margin: "0px 10px"}}></img>
          </Box>
        </Paper>
        <Paper style={{marginBottom: "5px", padding: "5px"}}>
          <Typography variant="h5">
            <u>Badminton</u>
          </Typography>
          <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <img src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w2440/f_auto/primary/kfsyzuaoipfhm4qonqci" style={{ margin: "0px 10px", width: "270", height: "150px" }} />
            <Typography variant="h6">
              Picked up badminton recently about 2 years ago. It's been really fun to go to social sessions and just chill!
              Haven't gone in nearly a year and I would be so down to just go again with people. 
            </Typography>
          </Box>
        </Paper>
        <Paper style={{marginBottom: "5px", padding: "5px"}}>
          <Typography variant="h5">
            <u>Photography</u>
          </Typography>
          <Typography variant="h6">
            Recently got a new phone and have been taking photos! Here are some of the photos I have taken: 
          </Typography>
          <Box sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr", 
            gap: "10px", 
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr", 
            },
          }}>
            <img src="fish.JPG" style={{ margin: "0px 10px", width: "270", height: "150px" }} />
            <img src="tree.JPG" style={{ margin: "0px 10px", width: "270", height: "150px" }} />
            <img src="woman.jpg" style={{ margin: "0px 10px", width: "270", height: "150px" }} />
          </Box>
        </Paper>
        <Paper style={{marginBottom: "5px", padding: "5px"}}>
          <Typography variant="h5">
            <u>Cooking</u>
          </Typography>
          <Box style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Typography variant="h6">
              Recently learnt to cook! My fav dishes to make are pasta, steak, wedges and garlic prawn!
            </Typography>
            <Box sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr", 
            gap: "10px", 
            "@media (max-width: 1050px)": {
              alignItems: "center",
              gridTemplateColumns: "1fr", 
            },
          }}>

            <img src="IMG_0182 2.JPG" style={{ margin: "0px 10px", width: "250px", height: "150px" }} />
            <img src="IMG_0218.JPG" style={{ margin: "0px 10px", width: "250px", height: "150px" }} />
            <img src="IMG_0241.JPG" style={{ margin: "0px 10px", width: "250px", height: "150px" }} />
          </Box>
          </Box>
        </Paper>



      </Paper>
    </Box>
  );
}
