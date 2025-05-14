import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useUserStore } from "../../../store/UserStore";
import { usePostStore } from "../../../store/PostStore";

const initialState = {
  author: "",
  content: "",
};

function MakeAPost() {
  const [newPost, setNewPost] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const { user } = useUserStore();
  const fullName = `${user.firstName} ${user.lastName}`;
  setNewPost((prev) => ({ ...prev, author: fullName }));

  const { createAPost } = usePostStore();

  const post = async () => {
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
            name="content"
            placeholder="Make a post"
            type="text"
            value={newPost.content}
            onChange={handleChange}
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <Button onClick={() => ""} variant="primary">
          Post
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MakeAPost;
