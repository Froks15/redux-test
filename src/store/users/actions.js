import * as types from "./actionTypes";

export function changeUserName(name) {
  return {
    type: types.CHANGE_USERNAME,
    payload: name
  };
}

export function todoToggle() {
  return {
    type: types.TODO_TOGGLE
  };
}

export function getTODORequest() {
  return {
    type: types.GET_TODO_REQUEST
  };
}

export function getTODOSuccess(todo) {
  return {
    type: types.GET_TODO_SUCCESS,
    payload: todo
  };
}

export function getTODOError(error) {
  return {
    type: types.GET_TODO_ERROR,
    error: error
  };
}

export function getTODO() {
  return async dispatch => {
    dispatch(getTODORequest());

    try {
      // fake timeout
      await new Promise(resolve => setTimeout(resolve, 1500));

      let response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      let todo = await response.json();

      dispatch(getTODOSuccess(todo));
    } catch (error) {
      dispatch(getTODOError(error));
    }
  };
}
