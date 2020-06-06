import React from 'react'

export default function (props) {
    if(props.yourStatus === ""){ 
        return (
            <>
               
            </>
        )
    }
    if(props.yourStatus > props.AIStatus){
   
        return (
        
            <div  className = "result">
               You Win!
            </div>
        )
    }
    if(props.yourStatus < props.AIStatus){

      
        return (
        
            <div  className = "result">
               You Loss!
            </div>
        )
    }
    if(props.yourStatus === props.AIStatus){

        return (
        
           <div  className = "result">
              Draw!
           </div>
        )
    }
    return (
        <>

        </>
    )
}

