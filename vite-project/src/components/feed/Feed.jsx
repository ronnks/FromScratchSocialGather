import postsCollection from "../post/post.modal/post.modal";

function Feed() {
  return (
    <>
      <h2>Feed</h2>
      {postsCollection.map((post) => (
        <>
          <div>{post.toString}</div>
          <p></p>
        </>
      ))}
    </>
  );
}

export default Feed;
