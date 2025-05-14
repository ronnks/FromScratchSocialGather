import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./NavbarCSS.css";
import { GoHome } from "react-icons/go";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { CiVideoOn } from "react-icons/ci";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { ImMenu } from "react-icons/im";
import { FaSignalMessenger } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";

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
            <Nav.Link href="/home">
              <GoHome className="nav_icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              <LiaUserFriendsSolid className="nav_icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              <CiVideoOn className="nav_icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              <AiOutlineUsergroupAdd className="nav_icon" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">
              <ImMenu />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              <FaSignalMessenger className="nav_icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              <IoNotifications className="nav_icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              <img className="nav_icon" src={"profile"}></img>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default _Navbar;
