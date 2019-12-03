import React from 'react';
import Slider from './components/Slider';
import Search from './components/Search';
import {api_key} from './config';
import axios from 'axios';
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            citySearched:"",
            citySearchedInfo:{},
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
                this.setState({citySearchedInfo:data.data})
                })
    }
    render(){
        return (
            <div className="App">
                {this.state.citySearched}
                <Search city={this.state.citySearched} onSearchEntryChange={this.filterCitySearch} submitSearch={this.getCityInfo}/>
                <Slider/>
                <Slider/>
            </div>
        
        )
    }
}
export default App;