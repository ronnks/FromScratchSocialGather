import Login from "../login/Login";
import SignUp from "../signup/Signup";
import { loginOrSignup } from "../../store/LoginOrSignupState";

function Welcome() {
  const loginOrSignupState = loginOrSignup((state) => state.loginOrSignupState);

  return <>{loginOrSignupState === "Login" ? <Login /> : <SignUp />}</>;
}

export default Welcome;
