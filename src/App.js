import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersSelectors from "./store/users/selectors";
import * as usersActions from "./store/users/actions";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  _handleInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { userName, changeName } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello, {userName}</h1>
          <input
            placeholder="name"
            name="username"
            onChange={e => this._handleInputChange(e)}
          />
          <button onClick={() => changeName(this.state.username)}>
            change
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: usersSelectors.getUserName(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: name => {
      dispatch(usersActions.changeUserName(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
