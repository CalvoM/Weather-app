import React from 'react';
import Slider from './components/Slider';
import Search from './components/Search';
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            citySearched:""
        };
        this.filterCitySearch = this.filterCitySearch.bind(this);
    }
    filterCitySearch(value){
        this.setState({citySearched:value})
    }
    render(){
        return (
            <div className="App">
                {this.state.citySearched}
                <Search city={this.state.citySearched} onSearchEntryChange={this.filterCitySearch}/>
                <Slider/>
                <Slider/>
            </div>
        
        )
    }
}
export default App;