import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./loginCSS.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginOrSignup } from "../../store/LoginOrSignupState";
import { useAuthStore } from "../../store/AuthStore";
import SocialGather from "../logo/socialGather";
import Card from "react-bootstrap/Card";

const initialFormData = {
  input: "",
  password: "",
};

function Login() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const loginOrSignupState = loginOrSignup((state) => state.loginOrSignupState);
  const setLoginOrSignupState = loginOrSignup(
    (state) => state.setLoginOrSignupState
  );
  const navigate = useNavigate();

  const handleEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  /*  const login = useAuthStore((state) => ({
    login: state.login,
  })); */

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    /* const { success, message } = await login(formData);

    if (success == true) {
      console.log("Login successed:", message);
      navigate("/feed");
    }
    console.log("Login failed:", message); */
  };

  return (
    <>
      <Card className="loginBox">
        <div className="socialgatherBox">
          <h1>socialgather</h1>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              name="email"
              value={formData.input}
              type="text"
              placeholder="Enter email or Username"
              onChange={handleEvent}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              name="password"
              value={formData.password}
              type="password"
              placeholder="Password"
              onChange={handleEvent}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your password.
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Button type="submit" variant="success">
            login
          </Button> */}
          <Button type="submit" variant="success">
            {loginOrSignupState}
          </Button>
          <br />
          <Link
            type="text"
            variant="normal"
            onClick={() => navigate("/forgotpassword")}
          >
            Forgot Password?
          </Link>
          <br />
          <Form.Text className="text-muted" variant="Success" type="text">
            or
          </Form.Text>
          <br />
          <Link
            type="text"
            variant="Success"
            as="a"
            onClick={() => setLoginOrSignupState("SignUp")}
          >
            Create new account
          </Link>
        </Form>
      </Card>
    </>
  );
}

export default Login;
