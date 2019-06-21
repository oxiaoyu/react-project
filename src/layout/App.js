import React from 'react';
import Home from '@/views/home';
import LiCai from '@/views/liCai';
import Find from '@/views/find';
import User from '@/views/user';
import Footer from '@/components/Footer'
import { Switch, Route, Redirect }  from 'react-router-dom';


const App = () => (
  <div className = "container">
    <Switch>
      <Route path = '/home' component = { Home } />
      <Route path = '/liCai' component = { LiCai } />
      <Route path = '/find' component = { Find } />
      <Route path = '/user' component = { User } />
      <Redirect to = '/home'  />
    </Switch>
    <Footer/>
  </div>
)

export default App;