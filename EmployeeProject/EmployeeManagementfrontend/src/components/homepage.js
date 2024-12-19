import React from 'react';
import FooterComponent from './FooterComponent';
  // Ensure you have App.css to style the component

const Home = () => {
  return (<div>




 
    <div className="container">
      <center> <h1> <a href='/add-employee'>Add Employee </a></h1></center><br></br>
      <header className="header">
        <h1>Employee Management System (EMS)</h1>
        <p>Built with React, Spring Boot, and MySQL</p>
      </header>

      <section className="overview-section">
        <h2>Project Overview</h2>
        <p>
          The Employee Management System (EMS) is a full-stack web application designed to allow users to manage employee data. 
          This system supports the following features:
        </p>
        <ul>
          <li>Displays a list of employees.</li>
          <li>Allows users to add new employees.</li>
          <li>Allows users to update employee details.</li>
          <li>Allows users to delete employees.</li>
          <li>Handles data validation and error handling.</li>
          <li>Ensures email uniqueness and other constraints for employees.</li>
        </ul>
      </section>

      <section className="architecture-section">
        <h2>System Architecture</h2>
        <p>
          The EMS is a web application that follows a typical full-stack architecture:
        </p>
        <ul>
          <li><strong>Frontend:</strong> Built with <strong>React</strong> to create an interactive user interface.</li>
          <li><strong>Backend:</strong> Developed using <strong>Spring Boot</strong> to manage logic, controllers, and services.</li>
          <li><strong>Database:</strong> Employee data is stored in a <strong>MySQL</strong> relational database.</li>
        </ul>
      </section>

      <section className="technologies-section">
        <h2>Technologies Used</h2>
        <p>Below are the key technologies used in this project:</p>
        <div className="technologies-list">
          <div className="tech-category">
            <h3>Frontend:</h3>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Axios</li>
              <li>React Hooks</li>
            </ul>
          </div>
          <div className="tech-category">
            <h3>Backend:</h3>
            <ul>
              <li>Spring Boot</li>
              <li>Spring Data JPA</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="tech-category">
            <h3>Tools:</h3>
            <ul>
              <li>Git</li>
              <li>Maven or Gradle</li>
              <li>Postman or Swagger</li>
              <li>Spring Security (Optional)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    
    </div>
  );
}

export default Home;
