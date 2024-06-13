import { useState, useEffect } from "react";

// Custom hook to fetch posts from API
export const useFetchPosts = () => {
  // Initialize state variables for posts, error, and loading status
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // effect hook to fetch posts when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        // Fetch posts from API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          // Throw error if response is not OK
          throw new Error("Sorry Wrong API Link");
        }

        // Parse response data as JSON
        const data = await response.json();

        // Update posts state with fetched data
        setPosts(data);
      } catch (error) {
        // Update error state with error message
        setError(error.message);
      } finally {
        // Set loading status to false
        setIsLoading(false);
      }
    };

    // Call the fetchPosts function
    fetchPosts();
  }, []);

  // Return an object with posts, error, and isLoading states
  return { posts, error, isLoading };
};
