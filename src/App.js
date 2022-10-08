import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactAudioPlayer from 'react-audio-player';
import fireRed from '../src/assets/audio/fireRed.mp3'


import Navbar from "./components/Navbar"

import Home from "./view/Home";
import Pokemon from "./view/Pokemon";
import Stats from "./view/Stats";
import NotFound from "./view/NotFound";

function App() {
  return (
<>

    <BrowserRouter>
     <ReactAudioPlayer
      src={fireRed}
      autoPlay
        />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemon" element={<Pokemon />} />
        <Route path="/Pokemon/:name" element={<Stats />} />
        <Route path="*"element={<NotFound />} />
      </Routes>

 
    </BrowserRouter>
    </>
  );
}

export default App;
