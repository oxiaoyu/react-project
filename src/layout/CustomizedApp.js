import React from 'react';
import Customized from '@/views/customized';
import { Route } from 'react-router-dom';

const Com = () => (
  <div className = "container">
    <Route path = "/customized" component = { Customized }/>
  </div>
)

export default Com;
