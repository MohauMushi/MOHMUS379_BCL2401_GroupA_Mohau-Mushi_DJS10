import { useFetchPosts } from "./utils/fetchPosts";
import "./App.css"

function App() {
const { posts, error, isLoading } = useFetchPosts();

if (isLoading) {
  return <h1 className="loading-indicator">Loading...</h1>;
}

if (error) {
  return <h1 className="error-message">Data fetching failed</h1>;
}

  return (
    <>
        <div className="blog-posts">
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
    </>
  );
}

export default App;