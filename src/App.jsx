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
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/schedule" element={<Index />} />
            <Route path="/route" element={<Index />} />
            <Route path="/speakers" element={<Index />} />
            <Route path="/speakers/:id" element={<Show />} />
            <Route path="/exhibits" element={<Index />} />
            <Route path="/map" element={<Index />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <BottomNav />
      </Router>
    </div>
  )
}

export default App
