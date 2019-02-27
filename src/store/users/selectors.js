export function getUserName(state) {
  return state.users.name;
}

export function getTODO(state) {
  return state.users.todo;
}

export function todoIsLoading(state) {
  return state.users.isLoading;
}

export function todoError(state) {
  return state.users.error;
}
