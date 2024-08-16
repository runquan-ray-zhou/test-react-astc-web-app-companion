import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Show from "./Pages/Show";
import Index from "./Pages/Index";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import BottomNav from "./Components/BottomNav/BottomNav"
import HeroImage from "./Components/HeroImage/HeroImage";

function App() {

  return (
    <div className='App'>
      <Router>
        <HeroImage />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Schedule" element={<Index />} />
            <Route path="/Route" element={<Index />} />
            <Route path="/Speakers" element={<Index />} />
            <Route path="/Speakers/:id" element={<Show />} />
            <Route path="/Exhibits" element={<Index />} />
            <Route path="/Map" element={<Index />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <BottomNav />
      </Router>
    </div>
  )
}

export default App
