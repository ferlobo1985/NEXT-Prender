import { useEffect, useState} from 'react';
import axios from 'axios';

const articlesPage = (props) => {
    const [articles,setArticles] = useState(props.articles);


    const loadArticles = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_start=5`)
        .then(response=>{
            setArticles([
                ...articles,
                ...response.data
            ])
        })
    }


    // useEffect(()=>{
    //     //loadArticles()
    // },[])

    return(
        <>
            <ul>
                { articles.map(item=>(
                    <li key={item.id}>{item.title}</li>
                ))}   
            </ul>
            <button onClick={()=>loadArticles()}>
                Get more
            </button>
        </>
    )
}

export const getStaticProps = async() => {
    const request = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)

    return{
        props:{
            articles:request.data
        }
    }

}



export default articlesPage