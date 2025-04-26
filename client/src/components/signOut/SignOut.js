import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/AuthStore";

const signOut = async () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const { success, message } = await logout();

  if (success) {
    console.log("User logged out successfully");
    navigate("/");
  }
  console.log("Log out failed:", message);
};

export default signOut;
