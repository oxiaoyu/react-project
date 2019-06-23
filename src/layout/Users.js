import React from 'react';
import { Switch, Route }  from 'react-router-dom';
import Login from '@/views/login';
import Setting from '@/views/setting';
import AnimatedRouter from 'react-animated-router'; //我们的AnimatedRouter组件
import 'react-animated-router/animate.css'; //引入默认的动画样式定义

const Com = () => (
  <div className = "container">
    <AnimatedRouter>
      <Route path = "/users/login" component = { Login }/>
      <Route path = "/users/setting" component = { Setting }/>
    </AnimatedRouter>
  </div>
)

export default Com;