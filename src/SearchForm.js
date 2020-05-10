import React, {Component} from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.filter(this.state.search);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <input 
                            type="text"
                            name="search"
                            className="form-control"
                            placeholder="Search"
                            value={this.state.search}
                            onChange={this.handleChange}
                            style={{width: "50vw"}}
                        />
                    </div>
                </div>        
            </div>
        )
    }
}

export default SearchForm;