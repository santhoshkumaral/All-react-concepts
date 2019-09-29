import React, { Component } from 'react'

export class NestedObject extends Component {
    constructor(){
        super()
        this.state={
            empdetails:[
                {name:"Pradeep",age:45,salary:50000,
            address:{
                residential:"Bangalore Karnataka",
                permanent:"Mysore Karnata",
                mobile:"990-2346-325",
                email:"pradeep@gmail.com"
            }
            }
            ]
        }
    }
  render() {
    return (
      <div>
        <div className="container">
            <h2>Nested conditions</h2>
            <table>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Address</th>
                {
                    this.state.empdetails.map((emp)=>{
                       return(
                        <tr>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.salary}</td>
                            <td>
                                {emp.address.residential}, {emp.address.permanent}, {emp.address.email},  {emp.address.mobile}
                            </td>
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

export default NestedObject
