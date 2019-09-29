import React, { Component } from 'react'

export class ProgramFragment1 extends Component {
    constructor(){
        super()
        this.state={
            name:"pradeep",
            dept :"development",
            salary:30000
        }
    }
  render() {
    return (
      //old approch here we are creating for extara dom element 
      // div  is creating a extra dom element

    //   <div className="container">
    //       <h3>Fragments</h3>
    //     <p>Name:{this.state.name}</p>
    //     <p>Dept:{this.state.dept}</p>
    //     <p>Salary:{this.state.salary}</p>
        
    //   </div>

    // here we are not creating extar dom <></> fragments will override the extara dom elements
    //here 3 approches is the to create a fragmnets 
    // .1. <React.fragments></React.fragments>
    //2 . <fragment></fragment>  here import  fragments
    // 3. <></>  This is the best way of writing or creating the feragments
    <>
     <h3>Fragments</h3>
        <p>Name:{this.state.name}</p>
        <p>Dept:{this.state.dept}</p>
        <p>Salary:{this.state.salary}</p>
    </>
    )
  }
}

export default ProgramFragment1
