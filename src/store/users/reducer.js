import * as types from "./actionTypes";

const initialState = {
  name: "Guest"
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CHANGE_USERNAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
