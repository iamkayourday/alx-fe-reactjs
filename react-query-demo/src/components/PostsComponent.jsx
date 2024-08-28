import React from 'react'
import { useQuery, useQueryClient } from 'react-query'

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('fetching Posts...')
    return response.json();
  
}

const PostsComponent = () => {
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery('posts', fetchPosts, {
        cacheTime: 1000 * 60 * 5, 
        staleTime: 1000 * 60 * 1, 
        refetchOnWindowFocus: true,
        keepPreviousData: true,
    });

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Error loading data: {error.message}</h1>
    }

    return (
        <>
            <h2>Fetch data using react-query</h2> 
            <button onClick={() => queryClient.invalidateQueries('posts')}>Refetch Posts</button>
            <div>
                <ol>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default PostsComponent;