
import React,{useRef} from 'react';

function TenthMarkSheet() {
    let passMarks=35;//GLOBAL VARIABLE
      let engInputref=useRef();
      let telInputref=useRef();
      let hinInputref=useRef();
      let matInputref=useRef(); //This is creating Ref,is equal to slecting a name.
      let sciInputref=useRef();
      let socInputref=useRef();
      let Total=useRef();
      let Per=useRef();
      let summary=useRef();
      let Name=useRef();
  return (
    <div><form >
    <h2>Tenth Marks Sheet</h2>
    <div>
    <label>Student name:</label>
    <input ref={Name} ></input>
    </div>
    <div><label>Telugu Marks:</label>
    <input onFocus={()=>{let a = 20; console.log(passMarks);}}//LOCAL VARIABLE
           onBlur={()=>{let b=30;console.log(passMarks);}}  ref={telInputref}></input></div>
    <div><label>Hindi Marks:</label>
    <input  ref={hinInputref}></input></div>
    <div><label>English Marks:</label>
    <input ref={engInputref}></input></div>
    <div><label>Maths Marks:</label>
    <input  ref={matInputref}></input></div>
    <div><label>Science Marks:</label>
    <input ref={sciInputref} ></input></div>
    <div><label>Social Marks:</label>
    <input  ref={socInputref}></input></div>
    <button type='button' className='btn btn-primary' onFocus={()=>{let engMarks=Number(engInputref.current.value);
                                                      let telMarks=Number(telInputref.current.value);
                                                      let hinMarks=Number(hinInputref.current.value);
                                                      let matMarks=Number(matInputref.current.value);
                                                      let sciMarks=Number(sciInputref.current.value);
                                                      let socMarks=Number(socInputref.current.value);
                                                      let Totalmarks=engMarks+hinMarks+matMarks+sciMarks+socMarks+telMarks;
                                                      //alert(Totalmarks);
                                                      let percentage=Totalmarks/6;
                                                      //alert(percentage);
                                                      Total.current.value=Totalmarks;
                                                      Per.current.value=percentage;
                                                      summary.current.innerHTML=`${Name.current.value} got ${0} in TenthClass exams `
                                                      }}>Calculate</button>
    <div><label>Total Marks:</label>                 
    <input ref={Total}></input></div>
    <div><label>Percentage:</label>
    <input ref={Per} ></input></div>
    <p ref={summary}></p>
    
   </form></div>
  )
}

export default TenthMarkSheet