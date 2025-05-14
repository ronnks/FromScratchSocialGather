import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Feed from "./components/views/feed/Feed";
import ForgotPassword from "./pages/login/forgotPassword/ForgotPassword";
import Profile from "./components/views/profile/Profile";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";

function App() {
  return (
    <>
      <div className="card">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
