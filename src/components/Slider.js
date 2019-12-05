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
    <div className="cityTag">{this.props.cityName},
    <span className="countryTag">{this.props.cityDetails.city.country}</span>
    </div>
            {(this.props.cityDetails.list.length/8)
            }
                <Card />               
            </div>
        );
    }
}
export default Slider;