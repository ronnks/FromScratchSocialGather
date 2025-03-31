import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ForgotPassword() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card>
        <Card.Body>Find my account</Card.Body>
      </Card>
      <Card.Body>
        <Card.Text>
          Please in put your email or username to locate ypur account.
        </Card.Text>
        <Form.Control type="email" placeholder="Email or Username" />
        <Button variant="normal">Cancel</Button>
        <Button variant="primary">Find</Button>
      </Card.Body>
    </Card>
  );
}

export default ForgotPassword;
