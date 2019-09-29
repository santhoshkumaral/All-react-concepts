import React, { Component } from 'react'
import Cricket from './Cricket'

export class India extends Component {
   
  render() {
    return (
      <div>
      <p>  Runs is {this.props.runs}</p><br/>
     
        <button onClick={this.props.makeFour}>Make 6</button>
      </div>
    )
  }
}

export default Cricket (India)
