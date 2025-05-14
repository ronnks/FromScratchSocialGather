import SignUp from "../../pages/signup/Signup";
import { loginOrSignup } from "../../store/LoginOrSignupState";
import Login from "../../pages/login/Login";

function Welcome() {
  const loginOrSignupState = loginOrSignup((state) => state.loginOrSignupState);

  return <>{loginOrSignupState === "Login" ? <Login /> : <SignUp />}</>;
}

export default Welcome;
