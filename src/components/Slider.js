import React from 'react';
import '../styles/Slider.css';
import Card from './Card';
class Slider extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <div className="Slider">
                <div className="cityTag">Mombasa</div>
                <Card />
                <Card />
                <Card />
                <Card />
                < Card />
            </div>
        );
    }
}
export default Slider;