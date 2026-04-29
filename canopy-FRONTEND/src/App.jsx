import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import Onboarding from "./components/onboarding/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;