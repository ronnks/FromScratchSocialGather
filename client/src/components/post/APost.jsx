import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const initialState = {
  like: [],
  comment: [],
  share: [],
};

function APost(User, Post) {
  const [post, setPost] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  function hidePost() {}

  return (
    <Card className="text-center">
      <Card.Header className="bg-body-tertiary justify-content-between">
        <Button
          variant="primary"
          type="text"
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
          name="like"
          value={post.like}
          variant="primary"
          type="text"
          onChange={handleChange}
        >
          Like
        </Button>
        <Card.Text>2 days ago</Card.Text>
        <Button
          name="comment"
          value={post.comment}
          variant="primary"
          type="text"
          onChange={handleChange}
        >
          Comment
        </Button>
        <Button
          name="share"
          value={post.share}
          variant="primary"
          type="text"
          onChange={handleChange}
        >
          Share
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default APost;
