import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { About } from './pages/About';
import { Hobbies } from './pages/Hobbies';
import { ChinaTrip } from './pages/ChinaTrip';
import { Projects } from './pages/Projects';

function App() {


  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/profile/' element={<About />} />
        <Route path='/profile/Hobbies' element={<Hobbies />} />
        <Route path='/profile/Projects' element={<Projects />} />
        <Route path='/profile/ChinaTrip' element={<ChinaTrip />} />
      </Routes>

  </BrowserRouter>
  )
}

export default App
