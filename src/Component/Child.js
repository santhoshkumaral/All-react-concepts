import React from 'react'
// class Child extends Component {
//     render() {
            
//             return (
//                 <div>
//                     The data from parent is:{this.props.dataFromParent}
//                 </div>
//             );
//         }
//     }
const  Child=(props)=>{
return(
    <div>
        <h2>data from parent to child</h2>
        City And POP is :{props.dataFromParent}
                  </div>
)
}
    export default Child;