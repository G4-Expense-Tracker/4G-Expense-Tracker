import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import Onboarding from './components/onboarding/Onboarding'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainPage from './components/MainPage'

function App() {

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
=======
    
>>>>>>> c267337 (DEV-15 update start page UI to MUI-format not regular jsx)
    <MainPage />
  )
}

export default App
