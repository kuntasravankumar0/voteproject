import React, { Component } from 'react';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header>
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
          <center>  <h1>Employee Management System</h1></center>
          </a>
        </div>
      </nav>
    </header>
    
    );
  }
}
