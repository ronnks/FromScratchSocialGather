import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import APost from "./APost";

function Posts(list) {
  return (
    <>
      {/* <h2>{"feed"}</h2>
      <Row xs={1} md={1} className="g-4">
        {list.map((post) => (
          <Col key={idx}>
            <APost Posts={post}></APost>
          </Col>
        ))}
      </Row> */}
    </>
  );
}

export default Posts;
