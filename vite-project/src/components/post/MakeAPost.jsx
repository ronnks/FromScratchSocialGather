import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function MakeAPost(User) {
  return (
    <Card>
      <Card.Header>Post</Card.Header>
      <Card.Header>{User.fullname}</Card.Header>
      <Card.Body>
        <FloatingLabel controlId="floatingTextarea2" label="">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <Button variant="primary">Post</Button>
      </Card.Body>
    </Card>
  );
}

export default MakeAPost;
