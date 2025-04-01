import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";

function _Navbar({ name }) {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          as="a"
          variant="link"
          onClick={() => navigate("/profile")}
        >
          <Logo></Logo>
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
            <Nav.Link as="a" variant="link" onClick={() => navigate("/more")}>
              more:
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default _Navbar;
