import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import ValidateSignUp from "./ValidateSignUp";
import { StateContext } from "../../contexts/StateContext";

const initialFormData = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

function SignUp() {
  const [formData, setFormData] = useState(initialFormData);
  const { state, setState } = useContext(StateContext);
  const navigate = useNavigate();

  const handleEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const signupButton = () => {
    if (ValidateSignUp(formData)) {
      navigate("/feed");
    } else {
      navigate("/");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <>
      <Card style={{ width: "40rem" }} className="text-center">
        <h2>Create Account</h2>
        <h5>Create your account</h5>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-6">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                name="firstName"
                required
                type="text"
                placeholder="First name"
                onChange={handleEvent}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control
                name="LastName"
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
                type="password"
                placeholder="New password"
                required
                onChange={handleEvent}
              />
            </Form.Group>
          </Row>
          <Button onClick={signupButton} variant="Success">
            {state}
          </Button>
        </Form>
        <Button
          type="submit"
          variant="Primary"
          as="a"
          onClick={() => setState("Login")}
        >
          Already have an account?
        </Button>
      </Card>
    </>
  );
}

export default SignUp;
