import React, { Component } from 'react'

export class Program1 extends Component {
    constructor(){
        super()
        this.state={
            playerlist:[
               { name:"vitat",age:31,matches:300},
               { name:"Rohit",age:29,matches:270},
               { name:"Dhoni",age:34,matches:323},
               { name:"sehwag",age:36,matches:350}
            ]
        }
    }
  render() {
    return (
      <div>
        <h2>Map method</h2>
        <table className="table">
                 <th>Sl No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Matches</th>
          
{
    this.state.playerlist.map((item,i)=>
    {
       

        return(
            <tr>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.matches}</td>
            </tr>
        )
    
    })
}
        </table>
      </div>
    )
  }
}

export default Program1
