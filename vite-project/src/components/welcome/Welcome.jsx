import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import socialGather from "/socialLogo.png";
import Logo from "../logo/Logo";
import Login from "../login/Login";

function Welcome() {
  let navigate = useNavigate();

  return (
    <>
      <Logo></Logo>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email or Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Login></Login>
        <Form.Text
          className="text-muted"
          variant="primary"
          type="Sign in"
          as="a"
          onClick={() => navigate("/forgotpassword")}
        >
          Forgot Password?
        </Form.Text>
        <Form.Text
          className="text-muted"
          variant="Secondary"
          type="text"
          as="a"
        >
          or
        </Form.Text>
        <Button
          variant="Success"
          type="Sign in"
          as="a"
          onClick={() => navigate("/register")}
        >
          Create new account
        </Button>
      </Form>
    </>
  );
}

export default Welcome;
