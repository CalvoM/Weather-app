import React from 'react';
import Slider from './components/Slider';
import Search from './components/Search';
import {api_key} from './config';
import axios from 'axios';
import './styles/App.css';
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            citySearched:"",
            citySearchedInfo:{},
            citySearchedList:[]
        };
        this.filterCitySearch = this.filterCitySearch.bind(this);
        this.getCityInfo = this.getCityInfo.bind(this);
    }
    filterCitySearch(value){
        this.setState({citySearched:value})
    }
    getCityInfo(){
        let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + this.state.citySearched + ',KEN&appid=' + api_key;
        axios.get(url)
            .then((data)=>{
                let response = data.data;
                if(response.cod ==='200'){
                    let city_name = data.data.city.name;
                    let isCityShown = this.state.citySearchedList.find(function(city){return city===city_name})
                    if(!isCityShown){
                        this.state.citySearchedList.push(city_name);
                        this.setState({citySearchedInfo:data.data});
                    }
                    else{
                        alert('City details already shown!');
                    }
                    this.setState({citySearched:""});
                }
                })
    }
    render(){
        return (
            <div className="App">
                <Search city={this.state.citySearched} onSearchEntryChange={this.filterCitySearch} submitSearch={this.getCityInfo}/>
                {this.state.citySearchedList.map((city)=>
                    <Slider cityName={city} key={city} cityDetails={this.state.citySearchedInfo}/>
                )}
            </div>
        
        )
    }
}
export default App;