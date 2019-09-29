import React, { Component } from 'react'
import Child from '../Component/Child'

 class Parent extends Component {
    constructor(props){
        super(props)
        this.state={
             cities:[
               {
               name:"bangalore", pop:450 },
              { name:"chenai", pop:100 },             
                { name:"hyderbad", pop:5000 }
             ]
        }
   }
  render() {
    return (
     
        <div className="App">           
         {/* <Child>CityName:{this.state.cities[0].name} CityPOP={this.state.cities[0].pop}></Child> */}
                <Child dataFromParent={this.state.cities[0].name}/>
                      </div>
    )
  }
 }
// class Parent extends Component {
// state = { data : "Hello World" } 
// render() {
        
//         return (
//             <div>
                           
//                  <Child dataFromParent = {this.state.data} />
//             </div>
//         );
//     }
// }

export default Parent
