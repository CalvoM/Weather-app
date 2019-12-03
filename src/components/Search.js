import React from 'react';
import '../styles/Search.css';
class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleSearchEntry = this.handleSearchEntry.bind(this);
    }
    handleSearchEntry(e){
        this.props.onSearchEntryChange(e.target.value);
    }
    render(){
        return(
            <div className="Search">
                <input type="text" placeholder="City name" value={this.props.city} onChange={this.handleSearchEntry}/>
                <input type="submit" value="Submit" />
            </div>
        );
    }
}
export default Search;