import postsCollection from "./Utlities/APost";

function Posts() {
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

export default Posts;
