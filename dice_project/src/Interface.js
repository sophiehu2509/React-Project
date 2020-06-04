import React, { Component } from 'react'
import './Interface.css'

export default class Interface extends Component {
    constructor(props){
        super(props);
        this.state={
            img:["https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg", "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg"],
            yourStatus: "",
            AIStatus:"",
            games:0,
            wins: [],
            draws:[],
            losses: []
        }
       
    }
    
     handleImgClick =() => {
        this.setState({
            games: this.state.games +1
        })
     }
    
    

    render() {
        return (
            <div className="container">
                <div style={{verticalAlign:'sub'}}> 
                    <img className="logo" onClick={this.handleImgClick} src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg" alt="Logo"/>
                    <span className="logoLabel">Clear</span>
                </div>
                <div className="sepCountNum">
                    You:{this.state.yourStatus} AI:{this.state.AIStatus}
                </div>
                <div className="countNum">
                    Games:{this.state.games}
                </div>
                <div className=""></div>
            </div>
        )
    }
}
