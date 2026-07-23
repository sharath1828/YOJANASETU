import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import Recommendations from "../pages/Recommendations/Recommendations";
import SchemeDetails from "../pages/SchemeDetails/SchemeDetails";
import Eligibility from "../pages/Eligibility/Eligibility";
import SavedSchemes from "../pages/SavedSchemes/SavedSchemes";
import Notifications from "../pages/Notifications/Notifications";
import BrowseSchemes from "../pages/BrowseSchemes/BrowseSchemes";
import AIChatbot from "../pages/AIChatbot/AIChatbot";
import Settings from "../pages/Settings/Settings";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageSchemes from "../pages/Admin/ManageSchemes";
import Applications from "../pages/Admin/Applications";
import Analytics from "../pages/Admin/Analytics";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />  
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Recommendations" element={<Recommendations />} />
      <Route path="/scheme/:id" element={<SchemeDetails />} />
      <Route path="Eligibility" element={<Eligibility />} />
      <Route path="/saved-schemes" element={<SavedSchemes />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/schemes" element={<BrowseSchemes />} />
      <Route path="/ai-chatbot" element={<AIChatbot />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/schemes" element={<ManageSchemes />} />
      <Route path="/admin/applications" element={<Applications />} />
      <Route path="/admin/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default AppRoutes;