import { useNavigate } from "react-router-dom";
import socialGather from "/socialLogo.png";

function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img
          src={socialGather}
          className="logo react"
          alt="socialGather logo"
          as="a"
          onClick={() => navigate("/feed")}
        />
      </div>
    </>
  );
}

export default Logo;
