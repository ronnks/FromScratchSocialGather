import DoubleLogo from "../logo/doubleLogo";
import Login from "../login/Login";
import SignUp from "../signup/Signup";
import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";

function Welcome() {
  const { state } = useContext(StateContext);

  return (
    <>
      <DoubleLogo></DoubleLogo>
      {state === "Login" ? <Login /> : <SignUp />}
    </>
  );
}

export default Welcome;
