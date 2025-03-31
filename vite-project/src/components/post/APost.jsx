import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function APost(User, Post) {
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
          {User.initials}
        </Button>
        <Button variant="primary" type="Sign in" as="a" onClick={hidePost}>
          Hide
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title>{Post.postDetails}</Card.Title>
        <Card.Img variant="top" src={Post.photo} />
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
