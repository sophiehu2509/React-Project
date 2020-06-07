import React from 'react'

export default function GameCount(props) {
    if(props.yourStatus  === ""){
        return (
        
            <div>
                wins:{} losses:{} draws:{}
            </div>
        )
    }

    if(props.yourStatus > props.AIStatus){

        props.wins.push(1);
   
        return (
        
            <div>
                wins:{props.wins.length} losses:{props.losses.length} draws:{props.draws.length}
            </div>
        )
    }
    if(props.yourStatus < props.AIStatus){

        props.losses.push(1);
   
        return (
        
            <div>
                wins:{props.wins.length} losses:{props.losses.length} draws:{props.draws.length}
            </div>
        )
    }
    if(props.yourStatus === props.AIStatus){

        props.draws.push(1);
   
        return (
        
            <div>
                wins:{props.wins.length} losses:{props.losses.length} draws:{props.draws.length}
            </div>
        )
    }
    return (
        
        <div>
            wins:{} losses:{} draws:{}
        </div>
    )
}
