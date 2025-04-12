import Card from "react-bootstrap/Card";
import MakeAPost from "../post/MakeAPost";
import Posts from "../post/Posts";
import _Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import { usePostStore } from "../../store/PostStore";
import APost from "../post/APost";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Profile(User) {
  const { getPosts, posts } = usePostStore();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <_Navbar></_Navbar>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{User.fullname}</Card.Title>
        </Card.Body>
      </Card>
      <br></br>
      <MakeAPost></MakeAPost>
      <br></br>
      <h2>{"feed"}</h2>
      <Row xs={1} md={1} className="g-4">
        {posts.map((post) => (
          <Col key={post._id}>{post.content}</Col>
        ))}
      </Row>
    </div>
  );
}

export default Profile;
