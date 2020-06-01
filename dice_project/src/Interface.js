import React, { Component } from 'react'

export default class Interface extends Component {
    constructor(props){
        super(props);
        this.img=["https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg"]
        this.yourStatus = "";
        this.AIStatus ="";
        this.games =0;
        this.wins = [];
        this.draws = [];
        this.losses = [];
    }

    
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
