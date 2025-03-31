import socialGather from "/socialLogo.png";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";
import Feed from "./components/feed/Feed";
import ForgotPassword from "./components/login/forgotPassword/ForgotPassword";
import Profile from "./components/profile/profile";

function App() {
  return (
    <>
      <div>
        <a href="http://localhost:5173/" target="_blank">
          <img
            src={socialGather}
            className="logo react"
            alt="socialGather logo"
          />
        </a>
      </div>
      <h1>Social Gather</h1>
      <div className="card">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
