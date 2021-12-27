import React, { Component } from 'react';
import { Speedometer } from 'react-bootstrap-icons';
// import '../templates/style.css';

class Admin extends React.Component {
    render() {
      return (
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item"><Speedometer color="royalblue" size={26} /> Dashboard </li>
                        <li class="nav-item">Orders</li>
                        <li class="nav-item">Products</li>
                        <li class="nav-item">Customers</li>
                        <li class="nav-item">Reports</li>
                        <li class="nav-item">Integrations</li>
                    </ul>
                </div>
                </nav>
            </div>);
    }
  }
export default Admin;