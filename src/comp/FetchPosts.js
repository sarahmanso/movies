import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



const FetchPosts = async () =>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data ;
}

function FetchPostsTwo (){
    const { data: posts, error, isLoading } = useQuery({
        queryKey : ['posts'] ,
        queryFn: FetchPosts,
        staleTime : 3000
    });

    if (isLoading) return <p>Loading ....</p>
    if (error) return <p> Error </p>

    return (
        <div>
            <h2>posts List</h2>
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchPostsTwo;