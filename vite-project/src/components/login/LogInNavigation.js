import { useNavigate } from "react-router-dom";
import ValidateLogIn from "./ValidateLogIn";

const LogIn = (data) => {
  const navigate = useNavigate();

  if (ValidateLogIn(data)) {
    navigate("/feed");
  } else {
    navigate("/");
  }
};

export default LogIn;
