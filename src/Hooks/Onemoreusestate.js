import React from 'react'

const Onemoreusestate=()=> {
 
    const [userInfo, setUserInfo] = React.useState({ 
        firstName: 'John', lastName: 'Doe',
      });
    
      return (
        <div>
            <h3>One more Example</h3>
          <p>userInfo: {JSON.stringify(userInfo)}</p>
          <button className="btn btn-success" onClick={() => setUserInfo(prevState => ({
            ...prevState, firstName: 'santhosh',lastName:'Kumar' }))}>
           Update
          </button>
        </div>
      );
  
}

export default Onemoreusestate
