import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginOrSignup } from "../../store/LoginOrSignupState";
import { useAuthStore } from "../../store/AuthStore";

const initialFormData = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialFormData);
  const { loginOrSignupState, setLoginOrSignupState } = loginOrSignup();
  const navigate = useNavigate();

  const handleEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const { login } = useAuthStore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { success, message } = await login(formData);

    if (success == true) {
      console.log("Login successed:", message);
      navigate("/feed");
    }
    console.log("Login failed:", message);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Text>Login</Form.Text>
        <br />
        <Form.Text>Login to your acount!</Form.Text>
        <br />
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            value={formData.email}
            type="text"
            placeholder="Enter email or Username"
            onChange={handleEvent}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            value={formData.password}
            type="password"
            placeholder="Password"
            onChange={handleEvent}
          />
        </Form.Group>
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
          onClick={setLoginOrSignupState("SignUp")}
        >
          Create new account
        </Link>
      </Form>
    </>
  );
}

export default Login;
