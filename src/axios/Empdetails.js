import React, { Component } from 'react'
import axios from 'axios'
export class Empdetails extends Component {
    constructor(){
        super()
        this.state={
           photos:[] 
        }
    }
    componentWillMount=()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        console.log("the response is ",res.data)
        this.setState({
          photos:res.data
        })
      })
     .catch((error)=>{
       console.log("the error is ",error)
     })
    }
  render() {
    return (
      <div>
        <div className="container">
          <h2>Axios Api method</h2><br/>
          <table>
            <th>Sl No</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Lat / Long</th>
           
            {
              this.state.photos.map((pt)=>{
                return(
                  <tr>
                    <td>{pt.id}</td>
                    <td align="justify">{pt.name}</td>
                    <td align="justify">{pt.username}</td>
                    <td  align="justify">{pt.email}</td>
                    <td  align="justify">{pt.address.street}, {pt.address.suite}, {pt.address.suite}, {pt.addresszipcode}</td>
                    <td align="justify">{pt.address.geo.lat}, {pt.address.geo.lng}</td>
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

export default Empdetails
