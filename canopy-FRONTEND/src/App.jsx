import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/pages/start/MainPage";
import Onboarding from "./components/pages/onboarding/Onboarding";
import OB_End from "./components/pages/onboarding/OB_End";
import LoginPage from "./components/pages/start/LoginPage";
import SignupPage from "./components/pages/start/SignupPage";
import LoadingPage from "./components/pages/start/LoadingPage";
import Goal from "./components/pages/goal_pages/Goal";


import DashboardPage from "./components/pages/dashboard/DashboardPage";
import CategoryPage from "./components/pages/profile_pages/category/CategoryPage";
import AddCategoryPage from "./components/pages/profile_pages/category/AddCategoryPage";
import NewGoal from "./components/pages/goal_pages/NewGoal/NewGoal";
import Accessibility from "./components/pages/profile_pages/accessibility/Accessibility";
import AccountPage from "./components/pages/profile_pages/account/AccountPage";
import ProfilePage from "./components/pages/profile_pages/profileandlogout/ProfilePage";
import LogoutPage from "./components/pages/profile_pages/profileandlogout/LogoutPage";
import Language from "./components/pages/profile_pages/Language";
import Notification from "./components/pages/profile_pages/notifications/Notification";

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
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/add-category" element={<AddCategoryPage />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/language" element={<Language />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;