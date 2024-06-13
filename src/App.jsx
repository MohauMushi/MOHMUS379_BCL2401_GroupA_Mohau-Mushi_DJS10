import { useFetchPosts } from "./utils/fetchPosts";
import "./App.css";

function App() {
  // Destructured the posts, error, and isLoading states from the useFetchPosts hook
  const { posts, error, isLoading } = useFetchPosts();

  // If the data is still loading, display a "Loading..." message
  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  }

  // If there's an error, display an error message
  if (error) {
    return <h1 className="error-message">Data fetching failed</h1>;
  }

  // Render the blog posts
  return (
    <>
      <div className="blog-posts">
        {/* Display the title of the blog posts section */}
        <h1>Posts</h1>
        {/* Map over the posts array and render each post */}
        {posts.map((post, index) => (
          <div key={index}>
            {/* Display the post title with its index */}
            <h2>
              {index + 1}. {post.title}
            </h2>
            {/* Display the post body */}
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
