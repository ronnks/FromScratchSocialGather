import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../../store/PostStore";

function MakeAPost(User) {
  const navigate = useNavigate();

  const { post } = usePostStore();

  const MakeAPost = async () => {
    const { success, message } = await post();

    if (success) {
      console.log("Post created successfully");
      navigate("/feed");
    }
    console.log("Post creation failed:", message);
  };

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

        <Button onClick={MakeAPost} variant="primary">
          Post
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MakeAPost;
