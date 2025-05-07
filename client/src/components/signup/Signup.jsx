import Card from "react-bootstrap/Card";

import { Link, useNavigate } from "react-router-dom";
import { loginOrSignup } from "../../store/LoginOrSignupState";
import { useAuthStore } from "../../store/AuthStore";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./signupCSS.css";

const initialFormData = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

function SignUp() {
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

  /*  const signup = useAuthStore((state) => ({
    signup: state.signup,
  })); */

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    /* const { success, message } = await signup(formData);

    if (success) {
      console.log("User registered successfully");
      navigate("/feed");
    }
    console.log("Registration failed:", message); */
  };

  return (
    <>
      <div className="signUpPage">
        <h1>socialgather</h1>
        <Card className="text-center signUpBox">
          <h2>Create Account</h2>
          <h6>It's super quick, let's go.</h6>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group md="3" controlId="validationCustom01">
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                What's your name.
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group md="3" controlId="validationCustom02">
              <Form.Control required type="text" placeholder="Last name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                What's your name.
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group md="3" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username or email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <br />
            <Form.Group md="3" controlId="validationCustom03">
              <Form.Control type="text" placeholder="New password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="success">
              {loginOrSignupState}
            </Button>
          </Form>
          <Link
            variant="Primary"
            as="a"
            onClick={() => setLoginOrSignupState("Login")}
          >
            Already have an account?
          </Link>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
