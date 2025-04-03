import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import DoubleLogo from "../logo/doubleLogo";
import { useState } from "react";
import usersCollection from "../user/user.modal/user.modal";

const initialFormData = {
  emailOrUsername: "",
  password: "",
};

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
    if (!data.emailOrUsername === "" && !data.password === "") {
      usersCollection.forEach((user) => {
        if (
          user.username === formData.emailOrUsername &&
          user.password === formData.password
        ) {
          console.log("user logged in");
        }
        console.log("create new account");
      });
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
    }

    if (validateSubmit(formData)) {
      navigate("/feed");
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

        <Form.Group
          name="password"
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleEvent}
          />
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
        <Form.Text className="text-muted" variant="Success" type="text" as="a">
          or
        </Form.Text>
        <br />
        <Button
          type="submit"
          variant="Success"
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
