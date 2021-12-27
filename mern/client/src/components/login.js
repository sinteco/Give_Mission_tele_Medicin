import React, { Component } from 'react';
// import '../templates/style.css';

class Login extends React.Component {
    render() {
      return (<div class="container">
          <div class="signup-form">
            <form action="/examples/actions/confirmation.php" method="post">
            <h2>Login</h2>
            <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
                </div>
              <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
                </div>        
                <div class="form-group">
              <label class="form-check-label"><input type="checkbox" required="required"/> Remember Me </label>
              </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-lg btn-block">Login Now</button>
                </div>
            </form>
          <div class="text-center">Don't have an account? <a href="#">Register</a></div>
        </div>
      </div>);
    }
  }
export default Login;