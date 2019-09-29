import React, { Component } from 'react'
import WithCounter from './WithCounter'
export class ClickCounter extends Component {
    
        
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
          <p>{count}</p>
        <p>{this.props.name}</p> 
        <button  className="btn btn-info" onClick={incrementCount}> x counter</button>
      </div>
    )
  }
}

export default WithCounter (ClickCounter,20)
