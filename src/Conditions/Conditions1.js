import React, { Component } from 'react'

export class Conditions1 extends Component {
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
        <div className="container">
          <h2>condition statement</h2>
            <table>
                <th>sl No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Matches</th>
                {
            this.state.playerlist.map((player,i)=>{
              let mtc=null;
              if(player.matches<=300){
                mtc=<div className="text-success">Well played</div>
              } else{
                  mtc=<div className="text-danger">Played poor</div>
              } 
            return(
                <tr>
                <td>{i+1}</td>
                <td>{player.name}</td>
                <td>{player.age}</td>
                <td>{mtc}</td>
            </tr>
            )
            })
                }
            </table>
        </div>
      </div>
    )
  }
}

export default Conditions1
