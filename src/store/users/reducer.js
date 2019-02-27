import * as types from "./actionTypes";

const initialState = {
  name: "Guest",
  todo: {},
  isLoading: false,
  error: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CHANGE_USERNAME:
      return {
        ...state,
        name: action.payload
      };
    case types.GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        todo: action.payload,
        isLoading: false
      };
    case types.GET_TODO_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case types.TODO_TOGGLE:
      return {
        ...state,
        todo: {
          ...state.todo,
          completed: !state.todo.completed
        }
      };
    default:
      return state;
  }
};
