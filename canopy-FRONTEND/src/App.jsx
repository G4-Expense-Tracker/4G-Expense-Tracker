import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import Onboarding from "./components/onboarding/Onboarding";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;