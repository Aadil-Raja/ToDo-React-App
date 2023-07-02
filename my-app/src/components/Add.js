import React, { useState } from 'react'
import '../add.css'
export const Add = (props) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit =(e) =>
    {
          e.preventDefault();
          if(!title|| !desc)
          {
            alert("empty fields");
          }
          else
          {
            props.addTodo(title,desc);   
          }
        
    }
  return (
    <div className="container my-5" >
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input  onChange={(e)=>setTitle(e.target.value)} type="text"  className="form-control box" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control box" value={desc} id="desc" onChange={(e)=>setDesc(e.target.value)} />
  </div>
  
  <button type="submit" onSubmit className=" button my-3">Submit</button>
</form>
    </div>
  )
}
