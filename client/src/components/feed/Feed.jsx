import _Navbar from "../navbar/Navbar";
import MakeAPost from "../post/MakeAPost";
import Posts from "../post/Posts";

function Feed() {
  return (
    <>
      <_Navbar name={"Nick"}></_Navbar>
      <MakeAPost></MakeAPost>
      <br></br>
      <Posts></Posts>
    </>
  );
}

export default Feed;
