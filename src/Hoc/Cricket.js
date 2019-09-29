import React, { Component } from 'react'
const Cricketcomp=(UpdatComponent)=>{

class NewComp extends Component {
    constructor(){
        super()
        this.state={
            runs:0
        }
    }
    makeFour=()=>{
       this.setState((pre)=>{
           return{
               runs:pre.runs+4
            }
       })
    }
  render() {
    return (
      <div>
        <UpdatComponent runs={this.state.runs} makeFour={this.makeFour}/>
      </div>
    )
  }
}
return NewComp
}

export default Cricketcomp
