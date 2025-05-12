import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./NavbarCSS.css";

function _Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="navbarBox">
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">S</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Form.Control
              placeholder="Search Socialgather"
              aria-label="Socialgather"
            />
          </Nav.Item>
        </Nav>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Friends</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">videos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Groups</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">socialize</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">notifications</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Account</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default _Navbar;
