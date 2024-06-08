import React  from 'react'
import { useFetchPosts } from './utils/fetchPosts'


function App() {
  const { posts, error } = useFetchPosts();

  return (
    <>

    </>
  )
}

export default App
