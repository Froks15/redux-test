import * as types from "./actionTypes";

export function changeUserName(name) {
  return {
    type: types.CHANGE_USERNAME,
    payload: name
  };
}
