import { Box, Container, Paper, Button, AppBar} from "@mui/material"
import { lightBlue } from "@mui/material/colors"
import { useNavigate } from "react-router-dom"
import App from "./App"

export function Header() {
  const navigate = useNavigate()

  const goToAbout = () => navigate("/")
  const goToHobbies = () => navigate("/Hobbies")
  const goToProjects = () => navigate("/Projects")
  const goToChinaTrip = () => navigate("/ChinaTrip")

  return (
    <Box>
      <Paper elevation={3} sx={{
        backgroundColor: "#3477eb", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", 
          padding: "20px",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          
          }}>
        <img src="https://cdn.britannica.com/84/158184-050-1D7ADEB5/balloon.jpg" alt="Balloon" width={"50px"} height={"50px"} />

        <Paper elevation={5} sx={{backgroundColor: "", width: "auto", alignItems: "center", display: "flex", justifyContent: "space-evenly" ,padding: "15px 0px", maxHeight: "80px"}}>
          <Button onClick={goToAbout}>About Me</Button>
          <Button onClick={goToHobbies}>Hobbies</Button>
          <Button onClick={goToProjects}>Projects</Button>
          <Button onClick={goToChinaTrip}>China Trip</Button>
        </Paper>

      </Paper>
      <AppBar>

      </AppBar>

    </Box>
  )
}