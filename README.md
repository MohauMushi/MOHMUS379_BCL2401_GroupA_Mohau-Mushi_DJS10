## Project Brief: Asynchrony

#### Project Objective
This project aimed to build a React application that fetches blog posts from the JSONPlaceholder API and displays them on the screen. The primary objective was to practice asynchronous data fetching, state management, and error handling in a React environment.

#### Requirements

1. **Project**: Create a React application

1. **API Integration**: Use the Fetch API to asynchronously fetch blog posts from `https://jsonplaceholder.typicode.com/posts`. Ensure the API response is checked—if it's not "ok", throw an error.
2. **State Management**: Store the fetched posts in the application's state. Use React hooks like `useState` and `useEffect` to manage state and side effects.
3. **Error Handling**: Catch any errors that might occur during the API call. If an error occurs, catch it and store the error message in the state instead of logging it to the console.
4. **UI Rendering**:
   - If the API call is successful, display each post's title and body in your application.
    ![alt text](<images/blog-posts.png>)
   - If the API call fails, display a user-friendly error message. Ensure your application does not crash.
    ![alt text](<images/error-message.png>)
5. **Testing Error States**: Simulate an error state by modifying the API URL to an incorrect address, and observe if the application correctly handles the error by displaying the appropriate message.


## What I Learned

1. **Asynchronous Data Fetching with Fetch API**:
   - Utilized the Fetch API to make asynchronous HTTP GET requests to retrieve blog post data from the JSONPlaceholder API.
   - Implemented error handling by checking the API response status and throwing an error if it was not successful.

2. **React Hooks for State Management**:
   - Leveraged React hooks, particularly `useState` and `useEffect`, to manage the application's state and side effects.
   - Used `useState` to store the fetched blog posts and potential error messages in the component's state.
   - Applied `useEffect` to fetch data from the API when the component mounts and handle the asynchronous operation's lifecycle.

3. **Error Handling and User Experience**:
   - Implemented robust error handling by catching and storing any errors that occurred during the API call.
   - Displayed user-friendly error messages when the API call failed, ensuring a graceful handling of unsuccessful requests.
   - Simulated error states by modifying the API URL to an incorrect address, verifying the application's ability to handle errors correctly.

4. **UI Rendering and Conditional Rendering**:
   - Rendered the fetched blog post titles and bodies on the screen when the API call was successful.
   - Applied conditional rendering techniques to display either the blog posts or an error message based on the application's state.

5. **Code Organization and Readability**:
   - Separated concerns by keeping the fetching logic and UI rendering distinct, promoting code maintainability and readability.
   - Utilized comments to explain decision-making processes, especially around error handling, enhancing code understanding






