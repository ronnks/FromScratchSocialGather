import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./NavbarCSS.css";
import { home_icon } from "./navicons/NavIcons";

function _Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="navbarBox">
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">
              <img className="nav_icon" src={"profile"}></img>
            </Nav.Link>
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
            <img className="nav_icon" src={home_icon}></img>
          </Nav.Item>
          <Nav.Item>
            <img className="nav_icon" src={home_icon}></img>
          </Nav.Item>
          <Nav.Item>
            <img className="nav_icon" src={home_icon}></img>
          </Nav.Item>
          <Nav.Item>
            <img className="nav_icon" src={home_icon}></img>
          </Nav.Item>
        </Nav>
        <Nav activeKey="/home">
          <Nav.Item>
            <img className="nav_icon" src={home_icon}></img>
          </Nav.Item>
          <Nav.Item>
            <img className="nav_icon" src={home_icon}></img>
          </Nav.Item>
          <Nav.Item>
            <img className="nav_icon" src={home_icon}></img>
          </Nav.Item>
          <Nav.Item>
            <img className="nav_icon" src={home_icon}></img>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default _Navbar;
