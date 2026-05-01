import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import Onboarding from "./components/onboarding/Onboarding";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import LoadingPage from "./components/LoadingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<LoadingPage />}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/onboarding" element={<Onboarding />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;