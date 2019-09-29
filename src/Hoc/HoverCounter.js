import React, { Component } from 'react';
import WithCounter from './WithCounter'

export class HoverCounter extends Component {
    
    
  render() {
    // <p>{this.props.count}</p>
    // <p>{this.props.incrementCount}</p>
    const {count,incrementCount}=this.props
    return (
      <div>
         <p>{count}</p>
        <button onMouseOver={incrementCount} className="btn btn-primary"> Inc Hover</button>
      </div>
    )
  }
}

export default WithCounter (HoverCounter,10)
