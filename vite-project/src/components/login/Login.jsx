import Button from "react-bootstrap/Button";

function Login({ onClick }) {
  return (
    <Button variant="primary" type="Sign in" as="a" onClick={onClick}>
      Log In
    </Button>
  );
}

export default Login;
