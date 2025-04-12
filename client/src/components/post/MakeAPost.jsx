import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { usePostStore } from "../../store/PostStore";

function MakeAPost() {
  const [newPost, setNewPost] = useState({ author: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const { createAPost } = usePostStore();
  const MakeAPost = async () => {
    const { success, message } = await createAPost(newPost);

    if (success) {
      console.log("Post created successfully");
      navigate("/profile");
    }
    console.log("Post creation failed:", message);
    setNewPost({ author: "", content: "" });
  };

  return (
    <Card>
      <Card.Header>Post</Card.Header>
      <Card.Header>{"User.fullname"}</Card.Header>
      <Card.Body>
        <FloatingLabel controlId="floatingTextarea2" label="">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            onChange={handleChange}
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
