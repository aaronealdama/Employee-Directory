import axios from 'axios';

export default {
    getEmployees: function() {
        return new Promise((resolve, reject) => {
            axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then(res => {
                const employees = res.data.results;
                console.log(employees);
                const array = employees.map(employee => {
                    return {
                        picture: employee.picture.large,
                        name: `${employee.name.first} ${employee.name.last}`,
                        cell: employee.cell,
                        email: employee.email,
                        location: `${employee.location.city}, ${employee.location.state}`,
                        id: employee.login.uuid
                    }
                })
                resolve(array);
            })
            .catch(err => reject(err));
        })
    }
}