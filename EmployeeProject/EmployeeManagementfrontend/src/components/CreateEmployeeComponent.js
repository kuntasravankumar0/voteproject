import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'; 
import './all.css'; 

export default function CreateEmployeeComponent() {
    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleClick = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployee({ ...employee, [name]: value });
    }

    const saveHandler = (e) => {
        e.preventDefault();

        if (!employee.firstName || !employee.lastName || !employee.email) {
            alert("Please fill in all fields.");
            return;
        }

        console.log("Employee Data:", JSON.stringify(employee));  

        EmployeeService.createEmployee(employee)
            .then(res => {
                console.log("Employee saved successfully!", res);
                navigate('/employees');
            })
            .catch(error => {
                console.error("Error during employee creation:", error);  
                alert("duplicate entry use anoter mail");
            });
    }

    const cancelHandler = () => {
        navigate('/employees');
    }

    return (
        <div className="custom-container">
            <div className="form-card">
                <h3 className="form-header">Add Employee</h3>
                <div className="form-body">
                    <form>
                        <div className="input-group">
                            <label>First Name:</label>
                            <input 
                                placeholder="First Name" 
                                name="firstName" 
                                required
                                className="input-field"
                                value={employee.firstName} 
                                onChange={handleClick} 
                            />
                        </div>
                        <div className="input-group">
                            <label>Last Name:</label>
                            <input 
                                placeholder="Last Name" 
                                name="lastName" 
                                required
                                className="input-field"
                                value={employee.lastName} 
                                onChange={handleClick} 
                            />
                        </div>
                        <div className="input-group">
                            <label>Email:</label>
                            <input 
                                placeholder="Email" 
                                required
                                name="email" 
                                className="input-field"
                                value={employee.email} 
                                onChange={handleClick} 
                            />
                        </div>
                        <div className="button-group">
                            <button className="save-btn" onClick={saveHandler}>Save</button>
                            <button className="cancel-btn" onClick={cancelHandler}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
