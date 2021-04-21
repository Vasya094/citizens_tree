function batchActions(...actions) {
  return {
    type: 'BATCH_ACTIONS',
    actions: actions
  };
}

function enableBatching(reducer) {
  return function batchingReducer(state, action) {
    switch (action.type) {
    case 'BATCH_ACTIONS':
      return action.actions.reduce(batchingReducer, state);
    default:
      return reducer(state, action);
    }
  }
}


export { enableBatching, batchActions}
