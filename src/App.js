import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import "./App.css";
import { bindActionCreators } from "redux";
import { fetchLogin } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  checkTokens() {
    const tokens = localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens"))
      : null;

    if (tokens) {
      return tokens.accessToken;
    }
    return null;
  }

  render() {
    const { fetchLogin, isLoading, error, tokens } = this.props;
    const tokensCheck = this.checkTokens();

    return (
      <div className="App">
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && !tokensCheck && (
          <Login fetchLogin={fetchLogin} tokens={tokens} error={error} />
        )}
        {tokensCheck && <h2>Hello, user!</h2>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchLogin
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
