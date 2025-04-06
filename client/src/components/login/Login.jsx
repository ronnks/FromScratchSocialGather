import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { StateContext } from "../../contexts/StateContext";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import ValidateLogIn from "./ValidateLogIn";

const initialFormData = {
  emailOrUsername: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialFormData);
  const { state, setState } = useContext(StateContext);
  const navigate = useNavigate();

  const handleEvent = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const loginButton = () => {
    if (ValidateLogIn(formData)) {
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
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <h5>Login to your acount!</h5>
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
        <Button onClick={loginButton} variant="primary" as="a">
          {state}
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
        <Button variant="Success" as="a" onClick={() => setState("SighUp")}>
          Create new account
        </Button>
      </Form>
    </>
  );
}

export default Login;
