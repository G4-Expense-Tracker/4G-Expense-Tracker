import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import Onboarding from "./components/onboarding/Onboarding";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import LoadingPage from "./components/pages/LoadingPage";
import DashboardPage from "./components/pages/dashboard/DashboardPage";
import ExpenseDashboard from "./components/pages/dashboard/ExpenseDashboard";
import CategoryPage from "./components/category/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<LoadingPage />}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/onboarding" element={<Onboarding />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/expense" element={<ExpenseDashboard />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;