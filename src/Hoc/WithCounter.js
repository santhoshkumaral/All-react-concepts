import React from 'react';
const WithCounter=(OriginalComponent,incValue)=>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               counter:0
            }
          }
          incrementCount=()=>{
              this.setState(preState=>{
                  return {
                   counter : preState.counter+incValue
                  }
                })
              }
render(){
    console.log("-------------------------",this.props.name)
    return(
        <div>
            <OriginalComponent count={this.state.counter}incrementCount={this.incrementCount}
            {...this.props}
            />
        </div>
    )
}
    }
    return WithCounter
}
export default WithCounter