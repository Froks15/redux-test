import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersSelectors from "./store/users/selectors";
import * as usersActions from "./store/users/actions";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getTODORequest();
  }

  _handleInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      userName,
      changeName,
      todo,
      todoIsLoading,
      todoError,
      todoToggle
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {/* <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello, {userName}</h1>
            <input
              placeholder="name"
              name="username"
              onChange={e => this._handleInputChange(e)}
            />
            <button onClick={() => changeName(this.state.username)}>
              change
            </button> */}
          </div>
          <div>
            <h1>TODO:</h1>
            {todoIsLoading ? (
              <div>loading...</div>
            ) : todoError.message ? (
              <p>{todoError.message}</p>
            ) : (
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    todoToggle();
                  }}
                />
                {todo.title}
              </label>
            )}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: usersSelectors.getUserName(state),
    todo: usersSelectors.getTODO(state),
    todoIsLoading: usersSelectors.todoIsLoading(state),
    todoError: usersSelectors.todoError(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: name => {
      dispatch(usersActions.changeUserName(name));
    },
    getTODORequest: () => {
      dispatch(usersActions.getTODO());
    },
    todoToggle: () => {
      dispatch(usersActions.todoToggle());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
