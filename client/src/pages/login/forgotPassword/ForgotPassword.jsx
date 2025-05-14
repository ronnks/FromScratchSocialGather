import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import "./forgotPasswordCSS.css";
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";

const initialFormData = {
  input: "",
};

function ForgotPassword() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleEvent = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFind = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Form
        className="forgotPasswordBox"
        noValidate
        validated={validated}
        onSubmit={handleFind}
      >
        <Card>
          <Card.Header>
            <Card.Title>Find my account</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Please input your email or username to locate your account.
            </Card.Text>
            {/* input can be either a username or an email */}
            <Form.Control
              required
              name="input"
              type="text"
              placeholder="Email or Username"
              onChange={handleEvent}
            />
            <Form.Control.Feedback type="invalid">
              Please enter username or email.
            </Form.Control.Feedback>
          </Card.Body>
          <Card.Footer>
            <Button
              className="cancelButton"
              variant="secondary"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" className="findButton">
              Find
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </>
  );
}

export default ForgotPassword;
