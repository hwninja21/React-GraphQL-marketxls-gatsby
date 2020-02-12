import React from 'react';
const ErrorCheck=({data})=>{
  
    if(data===undefined || data ===null || data === "unsupported operand type(s) for /: 'int' and 'unicode'" || data === "float division by zero"){
        return <span>NA</span>
    }

    else if(data.includes("%")){
    return <span>{data}</span>
    }
    
    else if(data.includes("Million")){
    return  <div>{data}</div>
    } 
    else if(isNaN(data)){
        return <div>NA</div>
    }

    return <div>{data}</div>

   

}

export default ErrorCheck;