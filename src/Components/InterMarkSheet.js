
import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap/dist/css/bootstrap.css';
import React,{useRef} from 'react';


function InterMarkSheet() {
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
      let engresultref=useRef();
      let telresultref=useRef();
      let hinresultref=useRef();
      let matresultref=useRef();
      let sciresultref=useRef();
      let socresultref=useRef();
     // let inputsMarks =(em,tm,hm,sm,mm) => {console.log(em);console.log(tm);console.log(hm);console.log(sm);console.log(mm);}; inputsMarks(120,30,40,50,60);
     let validateName=()=>{
          let regname=/^[A-Za-z]+$/;
          let result=regname.test(Name.current.value);
          if(result==true){
            console.log("Valid Name")
          }else{
            console.log("Invalid Name")
          }
     }                                                 
  return (
    <div><form >
    <h2>Inter Marks Sheet</h2>
    <div>
    <label>Student name:</label>
    <input ref={Name} onChange={()=>{validateName();}}></input>
    </div>
    <div><label>Telugu Marks:</label>
    <input ref={telInputref} 
    onFocus={()=>{telInputref.current.style.backgroundColor="gray";
    //telresultref.current.innerHTML="Please enter between 0-100";
  } }
  onBlur={()=>{telInputref.current.style.backgroundColor="";}}
    onChange={()=>{let telMarks=Number(telInputref.current.value);
                                            if(telMarks >=35){console.log("you Pass");
                                            telresultref.current.innerHTML="Pass";
                                             telresultref.current.style.backgroundColor="green"}
                                            else{
                                              console.log("you Failed");
                                              telresultref.current.innerHTML="Fail";
                                              telresultref.current.style.color="red";
                                                }}}
                                                ></input><span ref={telresultref} ></span></div>
    <div><label>Hindi Marks:</label>
    <input  ref={hinInputref}
    onFocus={()=>{hinInputref.current.style.backgroundColor="gray";
    //hinresultref.current.innerHTML="Please enter between 0-100";
  }}
  onBlur={()=>{telInputref.current.style.backgroundColor="";}}
    onChange={()=>{let hinMarks=Number(hinInputref.current.value);
                                            if(hinMarks >=35){console.log("you Pass");
                                            hinresultref.current.innerHTML="Pass";
                                             hinresultref.current.style.backgroundColor="green"}
                                            else{
                                              console.log("you Failed");
                                              hinresultref.current.innerHTML="Fail";
                                              hinresultref.current.style.color="red";
                                                }}}></input><span ref={hinresultref}></span></div>
    <div><label>English Marks:</label>
    <input ref={engInputref}></input><span ref={engresultref}></span></div>
    <div><label>Maths Marks:</label>
    <input  ref={matInputref}></input><span ref={matresultref}></span></div>
    <div><label>Science Marks:</label>
    <input ref={sciInputref} ></input><span ref={sciresultref}></span></div>
    <div><label>Social Marks:</label>
    <input  ref={socInputref}></input><span ref={socresultref}></span></div>
    <button type='button' className='btn btn-primary' onFocus={()=>{
                                                      let engMarks=Number(engInputref.current.value);
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
                                                      summary.current.innerHTML=`${Name.current.value} got ${Total.current.value} and ${Per.current.value} in TenthClass exams `
                                                      
                                                     /* if(engMarks >=35){console.log("you Pass");
                                                      engresultref.current.innerHTML="Pass";}
                                                      else{
                                                        console.log("you Failed");
                                                        engresultref.current.innerHTML="Fail";
                                                          }
                                                          if(telMarks >=35){console.log("you Pass");
                                                          telresultref.current.innerHTML="Pass";}
                                                          else{
                                                            console.log("you Failed");
                                                            telresultref.current.innerHTML="Fail";
                                                              }
                                                              if(hinMarks >=35){console.log("you Pass");
                                                              hinresultref.current.innerHTML="Pass";}
                                                              else{
                                                                console.log("you Failed");
                                                                hinresultref.current.innerHTML="Fail";
                                                                  }
                                                                  if(matMarks >=35){console.log("you Pass");
                                                              matresultref.current.innerHTML="Pass";}
                                                              else{
                                                                console.log("you Failed");
                                                                matresultref.current.innerHTML="Fail";
                                                                  }
                                                                  if(sciMarks >=35){console.log("you Pass");
                                                              sciresultref.current.innerHTML="Pass";}
                                                              else{
                                                                console.log("you Failed");
                                                                sciresultref.current.innerHTML="Fail";
                                                                  }
                                                                  if(socMarks >=35){console.log("you Pass");
                                                              socresultref.current.innerHTML="Pass";}
                                                              else{
                                                                console.log("you Failed");
                                                                socresultref.current.innerHTML="Fail";
                                                                  }*/
                                                         let studentResult=(Goa,Hyd,Mum,Ban)=>{
                                                          //console.log(Goa); console.log(Hyd); console.log(Mum); console.log(Ban);
                                                          let totalCost=Goa+Hyd+Mum+Ban;
                                                          return totalCost;
                                                         };         
                                                         let SR= studentResult(5000,6000,8000,9000);
                                                         console.log(SR);

                                                          let tenthMarks=(tms,hms,ems,mms,sms)=>{
                                                               let total=tms+hms+ems+mms+sms;
                                                               let per=(total/500)*100;
                                                               return {TotalMarks:total,
                                                                       Percentage:per};
                                                          };
                                                          let tm=tenthMarks(10,20,30,40,50);
                                                          console.log(tm);
                                                          
                                                          let homeExpenses=(gas,current,net,rent,groceries)=>{
                                                            let thex=gas+current+net+rent+groceries;
                                                            return thex;
                                                          };
                                                          let HEX=homeExpenses(1200,1000,500,17000,5000);
                                                          console.log(HEX);

                                                          let interresults=(tms,hms,ems,mms,sms)=>{
                                                            let total=tms+hms+ems+mms+sms;
                                                            let per=(total/500)*100;
                                                            let result="";
                                                            let grade="";
                                                            if (tms>=35 && hms>=35 && ems>=35 && mms>=35 && sms>=35){
                                                              result="Passed"}
                                                              else{
                                                                 result="Failed";
                                                              }
                                                              if (per>=90){grade="Distinction"}
                                                              else if (per>=70){grade="First Class"}
                                                              else if(per>=60){grade="Second Class"}
                                                              else if(per<=50){grade="Just Passed"}
                                                            
                                                            return{
                                                              TotalMarks:total,
                                                              Percentage:per,
                                                              Result:result,
                                                              Grade:grade,
                                                            }; };
                                                          let final=interresults(90,80,55,55,44);
                                                                console.log(final);

                                                      }}>Calculate</button>
                                                                    
    <div><label>Total Marks:</label>                 
    <input ref={Total}></input></div>
    <div><label>Percentage:</label>
    <input ref={Per} ></input></div>
    <p ref={summary}></p>
    <div id='loops' >
    <button type='button'className='btn btn-primary' onClick={()=>{ let a=10; if(a==10){console.log('a is 10');}}}>if Loop</button>
    <button type='button'className='btn btn-primary' onClick={()=>{let a=10;  while(a=10){console.log('a is 10');}}}>While</button>
    <button type='button'className='btn btn-primary' onClick={()=>{ let a=100; do{console.log(`a is ${a}`);} while(a>35);}}>Do While</button>
    <button type='button'className='btn btn-primary'onClick={()=>{for(let i=1;i<=10;i++){console.log(`i is ${i}`)}}}>For Loop</button>
    </div>
    
    
   </form></div>
  )
}

export default InterMarkSheet