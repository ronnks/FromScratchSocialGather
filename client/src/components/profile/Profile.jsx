import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import MakeAPost from "../post/MakeAPost";
import Posts from "../post/Posts";
import _Navbar from "../navbar/Navbar";

function Profile(User) {
  let navigate = useNavigate();

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
      <Posts feed={"My Posts"}></Posts>
    </div>
  );
}

export default Profile;
