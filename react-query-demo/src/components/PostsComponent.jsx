import React from 'react'
import { useQuery } from 'react-query'

const fetchPosts = async () => {
    console.log('Fetching posts...');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
    if (response) {
        return <div>Fetching posts...</div>
    }
}

const PostsComponent = () => {
    const {data, isLoading, isError, error} = useQuery('fetchData', fetchPosts);
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Error loading data</h1>
    }

  return (
    <>
       <h2>Fetch data using react-query</h2> 
       <button onClick={fetchPosts}>Refetch Posts</button>
       <div>
       <ol>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ol>
       </div>
    </>
  )
}

export default PostsComponent