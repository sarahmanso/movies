import { useQuery } from '@tanstack/react-query'; 

import axios from 'axios';



const fetchData  = async () =>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data ;
}

function FetchOnClickTwo (){
    const { data, error, isLoading } = useQuery({
            queryKey : ['posts'] ,
            queryFn: fetchData ,
            staleTime : 3000
        });
        
    if (isLoading) return <p>Loading ....</p>
    if (error) return <p> Error </p>

    return (
        <div>
            <ul>
                <button ></button>
            </ul>
        </div>
    )
}

export default FetchOnClickTwo;