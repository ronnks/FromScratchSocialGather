import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

const { logout } = useAuthStore();

const SignOut = (data) => {
  const navigate = useNavigate();

  logout();
  navigate("/");
};

export default SignOut;
