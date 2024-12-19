import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';


export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            error: null, // For error handling
            loading: true // Loading state
        };
    }

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees = () => {
        EmployeeService.getEmployees()
            .then((res) => {
                this.setState({ employees: res.data, loading: false });
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
                this.setState({ error: "Error fetching employee data", loading: false });
            });
    };

    deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId)
            .then(() => {
                this.fetchEmployees(); // Fetch updated employee list after deletion
            })
            .catch((error) => {
                console.error("Error deleting employee:", error);
            });
    };

    render() {
        const { employees, error, loading } = this.state;

        return (
            <div className="employee-list-container">
                <h2 className="text-center">Employee List</h2>

                <div className="actions-container">
                    <Link to="/add-employee" className="add-employee-btn">Add Employee</Link>

                    {loading ? (
                       <center> Loading employees...
                        <br/><br/><p className="loader"></p></center>
                    ) : error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        <table className="employee-table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <Link to={`/update-employee/${employee.id}`} className="update-btn">Update</Link>
                                            <button
                                                className="delete-btn"
                                                onClick={() => this.deleteEmployee(employee.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        );
    }
}
