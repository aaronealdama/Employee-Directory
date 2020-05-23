import React, {Component} from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.filter(this.state.search);
        this.setState({
            search: ''
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                            <div className="col">
                            <input 
                            type="text"
                            name="search"
                            className="form-control"
                            placeholder="Search"
                            value={this.state.search}
                            onChange={this.handleChange}
                            />
                        </div>
                        <button>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchForm;