import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;
    const { fetchLogin } = this.props;
    fetchLogin(email, password);
  }

  checkError() {
    const { error } = this.props;
    if (error) {
      return (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      );
    }
    return null;
  }

  //   {
  //     "data": {
  //         "id": 1,
  //         "name": "Poiri",
  //         "email": "max@test.com",
  //         "createdAt": "2019-11-04T11:42:49.704Z"
  //     },
  //     "errors": []
  // }

  render() {
    return (
      <div className="login-wrap">
        <h2 className="login-title">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              ref={this.emailRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              ref={this.passwordRef}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {this.checkError()}
      </div>
    );
  }
}

export default Login;
