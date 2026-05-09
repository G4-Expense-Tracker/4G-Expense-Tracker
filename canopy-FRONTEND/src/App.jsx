import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import Onboarding from "./components/onboarding/Onboarding";
import OB_End from "./components/onboarding/OB_End";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import LoadingPage from "./components/pages/LoadingPage";
import Goal from "./components/goal_pages/Goal";


import DashboardPage from "./components/pages/dashboard/DashboardPage";
import ExpenseDashboard from "./components/pages/dashboard/ExpenseDashboard";
import CategoryPage from "./components/profile_pages/category/CategoryPage";
import AddCategoryPage from "./components/profile_pages/category/AddCategoryPage";
import NewGoal from "./components/goal_pages/NewGoal";
import Accessibility from "./components/profile_pages/accessibility/Accessibility";
import AccountPage from "./components/profile_pages/account/AccountPage";
import ProfilePage from "./components/profile_pages/profileandlogout/ProfilePage";
import LogoutPage from "./components/profile_pages/profileandlogout/LogoutPage";
import Language from "./components/profile_pages/Language";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding-end" element={<OB_End />} />
        <Route path="/goals" element={<Goal />} />
        <Route path="/newgoal" element={<NewGoal />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/expense" element={<ExpenseDashboard />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/add-category" element={<AddCategoryPage />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/language" element={<Language />} />


      </Routes>
      
    </BrowserRouter>
  )
}

export default App;