import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import DoubleLogo from "../logo/doubleLogo";

function Welcome() {
  let navigate = useNavigate();

  return (
    <>
      <Form>
        <DoubleLogo></DoubleLogo>
        <br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email or Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Login></Login>
        <br />
        <Button
          className="text-muted"
          variant="primary"
          type="Sign in"
          as="a"
          onClick={() => navigate("/forgotpassword")}
        >
          Forgot Password?
        </Button>
        <br />
        <Form.Text
          className="text-muted"
          variant="Secondary"
          type="text"
          as="a"
        >
          or
        </Form.Text>
        <br />
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
