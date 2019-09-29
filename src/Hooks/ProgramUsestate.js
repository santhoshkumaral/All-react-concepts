import React, { useState } from 'react';  
import '../App.css';
const ProgramUsestate=()=>{
const [postCount,updateCount]=useState(0);  
return(
    <div className="container">
<h1>Hooks in UseState</h1><br/>
       <h4>post Count is {postCount}</h4>
      <button  className="btn btn-success" onClick={()=>updateCount(postCount+1)}>Add Count</button>  
      <button className="btn btn-danger" onClick={()=>updateCount(postCount-1)}>Delete Count</button>
    </div>
)
}

export default ProgramUsestate;


{/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
  </button> */}
  // this is similar to class component
