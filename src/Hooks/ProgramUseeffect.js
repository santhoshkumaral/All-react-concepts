// Useeffect  is the alternative method for component will mount

import React, { useState,useEffect } from 'react'
import axios from 'axios';
import '../App.css';
const ProgramUseeffect=()=> {
let [posts,populatepost]=useState([]);
useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
        .then((res)=>{
            console.log("resopnse of useeffect is",res.data)
        populatepost(res.data)
        })
        .catch((error)=>{
        console.log("the error is",error )
        })
    },[]);
return(
    <div className="container">
        <h2> Hooks in Use effect</h2>
<table className="table">
    <th>Sl No</th>
    <th>Name</th>
    <th>Email</th>
    <th>Description</th>
    {posts.map((post)=>{
    return(
        <tr>
            <td width="8%">{post.id}</td>
            <td width="30%">{post.name}</td>
            <td >{post.email}</td>
            <td>{post.body}</td>
        </tr>
    )
})
    }
</table>
    </div>
)
}

export default ProgramUseeffect;
