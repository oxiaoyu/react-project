import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store';
import user from '@/views/user/store';
import login from '@/views/login/store';

const reducer = combineReducers({
  home,
  user,
  login
})

const store = createStore(reducer);

export default store;