import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import APost from "./APost";
import { usePostStore } from "../../store/PostStore";
import { useEffect } from "react";

function Posts() {
  const { getPosts, myPosts } = usePostStore();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <h2>{"feed"}</h2>
      <Row xs={1} md={1} className="g-4">
        {myPosts.map((post) => (
          <Col key={idx}>
            <APost Post={post}></APost>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Posts;
