import { useFetchPosts } from "./utils/fetchPosts";

function App() {
  const { posts, error } = useFetchPosts();

  return (
    <>
      {error ? (
        <div>Data fetching failed</div>
      ) : (
        <div>
          <h1>Posts</h1>
          {posts.map((post, index) => (
            <div key={index}>
              <h2>
                {index + 1}. {post.title}
              </h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
