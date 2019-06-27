import React from 'react';
import { Route }  from 'react-router-dom';
import Login from '@/views/login';
import Setting from '@/views/setting';
import Member from '@/views/member';

import AnimatedRouter from 'react-animated-router'; //我们的AnimatedRouter组件
import 'react-animated-router/animate.css'; //引入默认的动画样式定义

const Com = () => (
  <div className = "container">
    <AnimatedRouter>
      <Route path = "/users/login" component = { Login }/>
      <Route path = "/users/setting" component = { Setting }/>
      <Route path = "/users/member" component = { Member }/>
    </AnimatedRouter>
  </div>
)

export default Com;