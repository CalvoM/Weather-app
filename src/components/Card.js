import React from 'react';
import '../styles/Card.css';
import Sun from '../snowy.svg';
class Card extends React.Component{
    render(){
        return(
            <button className="Card" onClick={this.props.onClick}>
                <p className="Day">Monday</p>
                <p className="WeatherImg">
                    <img src={Sun} alt="sun"/>
                </p>
                <p className="Temp">
                <span className="TempHigh">90&#8450;</span>
                < span className = "TempLow" >10&#8450;</span>                    
                </p>
            </button>
        );
    }
}
export default Card;