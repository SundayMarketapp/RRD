import React from 'react'

function Functions() {

    let marksSheet=(studentName,telMarks,hinMarks,engMarks,matMarks,sciMarks,socMarks) =>{
        
        console.log(studentName);
        console.log(telMarks);
        console.log(hinMarks);
        console.log(engMarks);
        console.log(matMarks);
        console.log(sciMarks);
        console.log(socMarks);
        if(engMarks>=35 && telMarks>=35 && hinMarks>=35 && engMarks>=35 && matMarks>=35 && sciMarks>=35 && socMarks>=35)
        {console.log(`${studentName} Pass the exam`) } else 
        {console.log(`${studentName} fail the exam`)}
    }
    marksSheet("ravi",70,80,36,40,50,60);
  return (
    
       <div></div> 
  )
}

export default Functions