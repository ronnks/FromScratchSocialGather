import postsCollection from "../post/post.modal/post.modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import APost from "./APost";
import usersCollection from "../user/user.modal/user.modal";

function Posts() {
  return (
    <>
      <h2>Feed</h2>
      <Row xs={1} md={1} className="g-4">
        {postsCollection.map((post) => (
          <Col key={idx}>
            <APost User={usersCollection[0]} Posts={post}></APost>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Posts;
