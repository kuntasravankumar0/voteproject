import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import '../App.css';

export default function UpdateEmployeeComponent() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then((res) => {
                const { firstName, lastName, email } = res.data; // Destructure the response
                setFirstName(firstName);
                setLastName(lastName);
                setEmail(email);
                setLoading(false); // Set loading to false
            })
            .catch((error) => {
                console.error("Error fetching employee:", error);
                setError("Error fetching employee data");
                setLoading(false); // Set loading to false even on error
            });
    }, [id]);

    const updateHandler = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email };

        EmployeeService.updateEmployee(id, employee)
            .then(() => {
                navigate('/employees');
            })
            .catch((error) => {
                console.error("Error updating employee:", error);
                setError("Error updating employee data");
            });
    };

    const cancelHandler = () => {
        navigate('/employees');
    };

    if (loading) {
        return <div className="container mt-3"><p>Loading employee data...</p></div>; // Loading message
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="form-card col-md-6 offset-md-3">
                    <h3 className="form-heading">Update Employee</h3>
                    <div className="form-body">
                        {error && <p className="error-message">{error}</p>} {/* Display error message */}
                        <form onSubmit={updateHandler}>
                            <div className="form-group">
                                <label className="form-label">First Name:</label>
                                <input
                                    placeholder="First Name"
                                    name="firstName"
                                    className="form-input"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last Name:</label>
                                <input
                                    placeholder="Last Name"
                                    name="lastName"
                                    className="form-input"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email:</label>
                                <input
                                    placeholder="Email"
                                    name="email"
                                    className="form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button className="save-btn" type="submit">Save</button>
                            <button className="cancel-btn" type="button" onClick={cancelHandler}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
