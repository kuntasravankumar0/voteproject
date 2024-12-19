import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:6060/employee/"; 
class EmployeeService {

    // Fetch all employees
    getEmployees() {
        return axios.get("http://localhost:6060/employee/get");
    }

    // Create a new employee
    createEmployee(employee) {
        return axios.post("http://localhost:6060/employee/post", employee);
    }

    // Fetch a single employee by ID
    getEmployeeById(employeeId) {
        return axios.get(`${"http://localhost:6060/employee/getbyid"}/${employeeId}`);
    }

    // Update an employee
    updateEmployee(employeeId, employee) {
        return axios.put(`${"http://localhost:6060/employee/update"}/${employeeId}`, employee);
    }

    // Delete an employee
    deleteEmployee(employeeId) {
        return axios.delete(`${"http://localhost:6060/employee/delete"}/${employeeId}`);
    }
}

// Export a singleton instance of EmployeeService
export default new EmployeeService();
