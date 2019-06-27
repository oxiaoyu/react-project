import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store';
import user from '@/views/user/store';
import login from '@/views/login/store';
import setting from '@/views/setting/store';
import member from '@/views/member/store';
import service from '@/views/service/store';
import userFinancial from '@/views/userFinancial/store';
const reducer = combineReducers({
  home,
  user,
  login,
  setting,
  member,
  userFinancial,
  service
})

const store = createStore(reducer);

export default store;