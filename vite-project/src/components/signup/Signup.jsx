import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Logo from "../logo/Logo";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Card style={{ width: "40rem" }} className="text-center">
        <Logo></Logo>
        <Card.Header>Create a new Account</Card.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-6">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control required type="text" placeholder="First name" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control required type="text" placeholder="Last name" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="username"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Control
                type="password"
                placeholder="New password"
                required
              />
            </Form.Group>
          </Row>
          <Button variant="Success" type="submit">
            Sigh Up
          </Button>
        </Form>
        <Button variant="Primary" as="a" onClick={() => navigate("/")}>
          Already have an account?
        </Button>
      </Card>
    </>
  );
}

export default SignUp;
