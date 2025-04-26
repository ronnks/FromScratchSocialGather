import DoubleLogo from "../logo/doubleLogo";
import Login from "../login/Login";
import SignUp from "../signup/Signup";
import { loginOrSignup } from "../../store/LoginOrSignupState";

function Welcome() {
  const loginOrSignupState = loginOrSignup();

  return (
    <>
      <DoubleLogo></DoubleLogo>
      {loginOrSignupState === "Login" ? <Login /> : <SignUp />}
    </>
  );
}

export default Welcome;
