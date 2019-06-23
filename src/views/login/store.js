const reducer = (state={
  isLogin:''
}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changeIsLogin': return Object.assign({}, state, {isLogin: data});
    default: return state;
  }
}

export default reducer;