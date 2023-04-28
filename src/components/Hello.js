import React, { useEffect, useState } from "react";
import axios from "axios";

let url = 'https://jsonplaceholder.typicode.com/posts';
// let url = 'http://hardikbackend.epizy.com/wp-json/wp/v2/posts';
// let url = 'http://backend.local/wp-json/wp/v2/posts';




const Hello = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then((res) => 
        setMyData(res.data)
        // console.log(res.data)
        );
    }, []);

    return <>
    <h1>axios test</h1>
    {
        myData.map((post) => {
            const {id, title, body} = post;
            return <div key = {id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
             
        })
    }
    </>
}

export default Hello;