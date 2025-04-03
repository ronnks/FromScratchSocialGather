import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Logo from "../logo/Logo";
import { useNavigate } from "react-router-dom";
import usersCollection from "../user/user.modal/user.modal";

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

  const validateSubmit = (data) => {
    if (
      !data.firstName === "" &&
      !data.lastName === "" &&
      !data.username === "" &&
      !data.email === "" &&
      !data.password === ""
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
    }

    usersCollection.push(formData);

    if (validateSubmit(formData)) {
      navigate("/feed");
    }

    console.log(usersCollection);
  };

  return (
    <>
      <Card style={{ width: "40rem" }} className="text-center">
        <Logo></Logo>
        <Card.Header>Create a new Account</Card.Header>
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
          <Button variant="Success" type="submit">
            Sigh Up
          </Button>
        </Form>
        <Button type="submit" variant="Primary" as="a">
          Already have an account?
        </Button>
      </Card>
    </>
  );
}

export default SignUp;
