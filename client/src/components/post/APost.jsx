import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function APost(User, Post) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  function hidePost() {}

  function likeAPost() {}

  function CommentOnAPost() {}

  return (
    <Card className="text-center">
      <Card.Header className="bg-body-tertiary justify-content-between">
        <Button
          variant="primary"
          type="Sign in"
          as="a"
          onClick={() => navigate("/profile")}
        >
          {User.firstName}
        </Button>
        <Button variant="primary" type="Sign in" as="a" onClick={hidePost}>
          Hide
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title>{Post.author}</Card.Title>
        <Card.Text variant="top">{Post.content}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted bg-body-tertiary justify-content-between">
        <Button
          variant="primary"
          type="Sign in"
          as="a"
          onClick={() => likeAPost}
        >
          Like
        </Button>
        <Card.Text>2 days ago</Card.Text>
        <Button
          variant="primary"
          type="Sign in"
          as="a"
          onClick={CommentOnAPost}
        >
          Comment
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default APost;
