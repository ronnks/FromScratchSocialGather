import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  return (
    <Button variant="primary" type="Sign in" as="a">
      Log In
    </Button>
  );
}

export default Login;
