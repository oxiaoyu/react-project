import React from 'react';
import Home from '@/views/home';
import LiCai from '@/views/liCai';
import Find from '@/views/find';
import User from '@/views/user';
import Footer from '@/components/Footer'
import { Switch, Route, Redirect }  from 'react-router-dom';
import AnimatedRouter from 'react-animated-router'; //我们的AnimatedRouter组件
import 'react-animated-router/animate.css'; //引入默认的动画样式定义


const App = () => (
  <div className = "container">
    <AnimatedRouter>
      <Route path = '/home' component = { Home } />
      <Route path = '/liCai' component = { LiCai } />
      <Route path = '/find' component = { Find } />
      <Route path = '/user' component = { User} />
      <Redirect to = '/home'  />
    </AnimatedRouter>
    <Footer/>
  </div>
)

export default App;