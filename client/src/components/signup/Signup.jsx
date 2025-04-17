import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpStore } from "../../store/SignUpStore";
import { loginOrSignup } from "../../store/LoginOrSignupState";

const initialFormData = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

function SignUp() {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const { signup } = useSignUpStore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { success, message } = await signup(formData);

    if (success) {
      console.log("User registered successfully");
      navigate("/feed");
    }
    console.log("Registration failed:", message);
  };

  return (
    <>
      <Card style={{ width: "40rem" }} className="text-center">
        <h2>Create Account</h2>
        <h6>Create your account</h6>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-6">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                name="firstName"
                value={formData.firstName}
                required
                type="text"
                placeholder="First name"
                onChange={handleEvent}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control
                name="lastName"
                value={formData.lastName}
                required
                type="text"
                placeholder="Last name"
                onChange={handleEvent}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  name="username"
                  value={formData.username}
                  type="username"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={handleEvent}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control
                name="email"
                value={formData.email}
                type="email"
                placeholder="Email"
                required
                onChange={handleEvent}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Control
                name="password"
                value={formData.password}
                type="password"
                placeholder="New password"
                required
                onChange={handleEvent}
              />
            </Form.Group>
          </Row>
          <Button type="submit" variant="success">
            {loginOrSignup.loginOrSignupState}
          </Button>
        </Form>
        <Link
          variant="Primary"
          as="a"
          onClick={loginOrSignup.setLoginOrSignupState("Login")}
        >
          Already have an account?
        </Link>
      </Card>
    </>
  );
}

export default SignUp;
