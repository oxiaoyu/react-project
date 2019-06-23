const reducer = (state={}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changeLogin': return Object.assign({}, state, {isLogin: data});
    default: return state;
  }
}

export default reducer;