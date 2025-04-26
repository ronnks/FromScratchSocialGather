import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import signOut from "../signOut/SignOut";

function _Navbar() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as="a" variant="link" onClick={() => navigate("/feed")}>
          Social Gather
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="a" variant="link" onClick={() => navigate("/feed")}>
              Home
            </Nav.Link>
            <Nav.Link as="a" variant="link" onClick={() => navigate("/feed")}>
              Feed
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item
                as="a"
                variant="link"
                onClick={() => navigate("/profile")}
              >
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as="a" variant="link" onClick={signOut}>
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default _Navbar;
