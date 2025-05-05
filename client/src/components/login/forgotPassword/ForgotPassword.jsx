import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card>
          <Card.Body>Find my account</Card.Body>
        </Card>
        <Card.Body>
          <Card.Text>
            Please in put your email or username to locate your account.
          </Card.Text>
          <Form.Control type="email" placeholder="Email or Username" />
          <br></br>
          <Button variant="normal" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <Button variant="primary">Find</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ForgotPassword;
