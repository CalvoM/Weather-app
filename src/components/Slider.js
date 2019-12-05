import React from 'react';
import '../styles/Slider.css';
import Card from './Card';
class Slider extends React.Component{
    componentDidMount(){
        console.log(this.props.cityDetails)
    }
    render(){
        return(
            <div className="Slider">
    <div className="cityTag">{this.props.cityName}, {this.props.cityDetails.city.country}</div>
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