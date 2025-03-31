import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import socialGather from "/socialLogo.png";

function Navbar({ name }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          as="a"
          variant="link"
          onClick={() => navigate("/profile")}
        >
          <img
            src={socialGather}
            className="logo react"
            alt="socialGather logo"
            as="a"
            variant="link"
            onClick={() => navigate("/login")}
          />
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

export default Navbar;
