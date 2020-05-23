import React, {Component} from 'react';

class Employee extends Component {
    render() {
        const employee = this.props.employee
        return (
            <div className="card" style={{width: "16rem", margin: "20px"}}>
                <img src={employee.picture} style={{
                        width: 150, 
                        height: 150, 
                        marginLeft: 'auto', 
                        marginRight: "auto", 
                        display: "block",
                        marginTop: "20px"
                    }}/>
                <div className="card-body" style={{textAlign: "center"}}>
                    <h5 className="card-title">
                        {employee.name}
                    </h5>
                    <p className="card-text">
                        {employee.cell}
                    </p>
                    <p className="card-text">
                        {employee.email}
                    </p>
                    <p className="card-text">
                        {employee.location}
                    </p>
                </div>
            </div>
        )
    }
}

export default Employee;