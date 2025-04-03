import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import DoubleLogo from "../logo/doubleLogo";
import { useState, createContext } from "react";

const initialFormData = {
  emailOrUsername: "",
  password: "",
};

export const WelcomeContext = createContext();

function Welcome() {
  const [formData, setFormData] = useState(initialFormData);
  let navigate = useNavigate();

  const handleEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateSubmit = (data) => {
    if (data.emailOrUsername && data.password) {
      return true;
    }
    return false;
  };
  console.log(validateSubmit(formData));
  const login = () => {
    if (validateSubmit(formData)) {
      navigate("/feed");
      console.log("/feed " + formData);
    } else {
      navigate("/");
      console.log("/ " + "" + formData);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <DoubleLogo></DoubleLogo>
        <br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="emailOrUsername"
            type="email"
            placeholder="Enter email or Username"
            onChange={handleEvent}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleEvent}
          />
        </Form.Group>
        <Button
          className="text-muted"
          variant="primary"
          type="submit"
          as="a"
          onClick={login}
        >
          Log In
        </Button>

        <br />
        <Button
          className="text-muted"
          variant="primary"
          type="text"
          as="a"
          onClick={() => navigate("/forgotpassword")}
        >
          Forgot Password?
        </Button>
        <br />
        <Form.Text className="text-muted" variant="Success" type="text" as="a">
          or
        </Form.Text>
        <br />
        <Button variant="Success" as="a" onClick={() => navigate("/register")}>
          Create new account
        </Button>
      </Form>
    </>
  );
}

export default Welcome;
