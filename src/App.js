import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Component/Parent';
import Parent1 from './Component/Parent1';
import Program1 from './mapmethod/Program1';
import Conditions1 from './Conditions/Conditions1';
import NestedObject from './Conditions/NestedObject';
import Empdetails from './axios/Empdetails';
import Employee from './crudoperation/Employee';
// import Newsletter from './Class&FuncComp/Newsletter';
import ProgramUsestate from './Hooks/ProgramUsestate';
import Onemoreusestate from './Hooks/Onemoreusestate';
import ProgramUseeffect from './Hooks/ProgramUseeffect';
import ProgramFragment1 from './Fragments/ProgramFragment1';
// import { India } from './Hoc/India';

import ClickCounter from './Hoc/ClickCounter';
import HoverCounter from './Hoc/HoverCounter';

function App() {
  return (
    <div className="App">
    
     <Parent/><br></br><hr/>
     <Program1/><br></br>
     <hr/>
     <Conditions1/><br></br>
     <hr/>
     <NestedObject/><br></br>
     <hr/>
     <Empdetails/><br/><hr/>
     <Employee/><br/><hr/>
     {/* <Newsletter/> */}
     <ProgramUsestate/><br></br>
     <Onemoreusestate/><br/>
     <ProgramUseeffect/><br/>
     <ProgramFragment1/><br/>
   
     <ClickCounter name="santhosh"/>
     <HoverCounter/>
     {/* <India/> */}

    </div>
  );
}

export default App;
