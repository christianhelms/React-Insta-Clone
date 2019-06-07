
import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <input style={searchStyle}
                onChange={this.props.s}
                placeholder="search..."
                type="text"
                // value={this.props.newSearch}
            />
        );
    }
}

const searchStyle = {
    textAlign: 'center',
    height: '20px',
    width: '200px',
    borderRadius: '4px'
}

 
export default SearchBar;