import React from 'react';
import '../styles/Slider.css';
import Card from './Card';
class Slider extends React.Component{
    constructor(props){
        super(props);
        this.renderCard = this.renderCard.bind(this);
    }
    componentDidMount(){
        console.log(this.props.cityDetails.list)
    }
    renderCard(cityDetails){
        let day_counter = 0;
        let day_max_temp_list=[];
        let day_min_temp_list=[];
        for(let hour_details of cityDetails){
            if(day_counter%8===0){
                console.log(day_max_temp_list)
                day_min_temp_list.length=0;
                day_max_temp_list.length=0;
                day_counter = 0;
                return <Card />
            }
            day_max_temp_list.push(+hour_details.main.temp_max);
            day_min_temp_list.push(+hour_details.main.temp_min)
            day_counter +=1;
        } 
        
    }
    render(){
        return(
            <div className="Slider">
    <div className="cityTag">{this.props.cityName},
    <span className="countryTag">{this.props.cityDetails.city.country}</span>
    </div>
        {this.renderCard(this.props.cityDetails.list)}           
    </div>
        );
    }
}
export default Slider;