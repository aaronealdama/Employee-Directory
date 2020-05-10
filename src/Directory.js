import React, {Component} from 'react';
import API from './utils/API';
import SearchForm from './SearchForm';
import Employee from './Employee';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: null,
            filtered: null
        }
        this.filterArray = this.filterArray.bind(this);
    }
    componentDidMount() {
        API.getEmployees()
        .then(res => {
            this.setState({
                employees: res
            })
        })
        .catch(err => console.log(err));
    }
    filterArray(text) {
        if (text.toString().length > 0) {
            const filtered = this.state.employees.reduce((allEmployees, employee) => {
                const array = Object.values(employee);
                for (let i = 0; i < array.length; i++) {
                    if (array[i].indexOf(text.toString()) > -1) {
                        allEmployees.push(employee);
                    }
                }
                return allEmployees
            }, []);
            this.setState({
                filtered: filtered
            });
        } else {
            this.setState({
                filtered: null
            })
        }
    }
    render() {
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                <SearchForm filter={this.filterArray}/>
                </div>
                {this.state.employees !== null ? 
                this.state.filtered !== null ?
                this.state.filtered.map(employee => {
                    return (
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Employee key={employee.id} employee={employee}/>
                        </div>
                    )
                }) : this.state.employees.map(employee => {
                    return (
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Employee key={employee.id} employee={employee}/>
                        </div>
                    )
                }) : ""}
            </div>
        )
    }
}

export default Directory;