import React from 'react'

export default function Games(props) {
    // const [showSpan, setShowspan] = useState(props.state.yourStatus);
    const diceImg = {
        one:
        "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
      two:
        "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
      three:
        "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
      four:
        "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
      five:
        "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
      six:
        "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg"
    }
    
     if(props.yourStatus === ""){
         return (
             <>
             </>
         )
     }
    if (props.yourStatus === 1){
        return (
            <span>
                 You:<img src={diceImg.one} alt="1" width="40px"/> 
            </span>
        ) 
    }else if (props.yourStatus === 2){
        return (
            <span>
                 You:<img src={diceImg.two} alt="1" width="40px"/> 
            </span>
        ) 
    }
    else if (props.yourStatus === 3){
        return (
            <span>
                 You:<img src={diceImg.three} alt="1" width="40px"/> 
            </span>
        ) 
    }
    else if (props.yourStatus === 4){
        return (
            <span>
                 You:<img src={diceImg.four} alt="1" width="40px"/> 
            </span>
        ) 
    }
    else if (props.yourStatus === 5){
        return (
            <span>
                 You:<img src={diceImg.five} alt="1" width="40px"/> 
            </span>
        ) 
    }
    else {
        return (
            <span>
                 You:<img src={diceImg.six} alt="1" width="40px"/> 
            </span>
        ) 
    }
    
}
