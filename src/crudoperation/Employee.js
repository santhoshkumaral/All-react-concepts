import React,{Component} from 'react';
import axios from 'axios';
class Employee extends Component{

constructor(){
  super();
  this.state = {
emps : [],
name : "",
dept : "",
btn_stt : true,
update_id : ''
  }
  
}


componentWillMount(){
this.getRecords();
this.clearField();
}

getRecords=()=>{
  axios.get("https://my-test-project-38e69.firebaseio.com/employees.json").then((res)=>{


let keys = Object.keys(res.data);
let empList = keys.map((key)=>{
  return {
    key : key,
    record : res.data[key]
  }
})
console.log('The list is ',empList)
this.setState({
  emps : empList
})
  })
  .catch((err)=>{
    console.log('The error is ',err);
  })
}

clearField = ()=>{

  this.setState({
    name : "",
    dept : ""
  })
}

saveRecord=()=>{
console.log('Saving record.. ',this.state);
axios.post("https://my-test-project-38e69.firebaseio.com/employees.json",{name :this.state.name,dept : this.state.dept}).then((res)=>{
console.log('The save res is ',res.data.data);
this.getRecords();
// this.clearField();

})
.catch((err)=>{
  console.log('The error is ',err);
})
}

updateRecord = ()=>{
  console.log('The update i is',this.state.update_id)
  axios.put("https://my-test-project-38e69.firebaseio.com/employees/"+this.state.update_id+".json",{
    
   name : this.state.name,
   dept : this.state.dept
  }).then((res)=>{
console.log('Recored updated',res)
alert("Record updated sucess")
  })
  .catch((err)=>{
    console.log('The error  is ',err)
  })
}

delRecord =(key)=>{
axios.delete("https://my-test-project-38e69.firebaseio.com/employees/"+key+".json").then((res)=>{
console.log('Record deleted');
this.getRecords();
// this.clearField();
})
.catch((err)=>{
  console.log('The error is ',err);
})
}

editRecord = (data)=>{
this.setState({
  name : data.record.name,
  dept : data.record.dept,
  btn_stt : false,
  update_id : data.key
})
}

render(){
  return (//JUSX Template
    <div className="container">
      <h3>CRUD Operation in Firebase</h3>
<div className="form-group">
  <label>Name</label>
 <input className="form-control" value={this.state.name} onChange={(evt)=>this.setState({name : evt.target.value})} />
</div>
<div className="form-group">
  <label>Department :</label>
 <input className="form-control" value={this.state.dept} onChange={(evt)=>this.setState({dept : evt.target.value})}/>
</div>
<div className="form-group">
  
{
(this.state.btn_stt==true)? <button className="btn btn-info" onClick={()=>this.saveRecord()}>Save</button> : <button type="submit" className="btn btn-info" onClick={()=>this.updateRecord()}>Update</button>


}
</div>

<table className="table" >
<th>Name</th><th>Department</th><th>Action</th>
{
this.state.emps.map((emp)=>{
  return (
    <tr>
<td>{emp.record.name}</td>
<td>{emp.record.dept}</td>
<td>

<button className="btn btn-warning" onClick={()=>this.editRecord(emp)}>Edit</button> | 


<button className="btn btn-danger" onClick={()=>this.delRecord(emp.key)}>Del</button>
</td>
    </tr>
  )
})

}
</table>
    </div>
  )
}

}

export default Employee;




