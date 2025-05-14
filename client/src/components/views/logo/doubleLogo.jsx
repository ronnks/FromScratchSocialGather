import Col from "react-bootstrap/esm/Col";
import Logo from "./Logo";

function DoubleLogo() {
  return (
    <>
      <Col>
        <Logo></Logo>
        <h1>Social Gather</h1>
        <Logo></Logo>
      </Col>
    </>
  );
}

export default DoubleLogo;
