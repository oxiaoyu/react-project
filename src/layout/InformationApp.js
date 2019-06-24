import React from 'react';
import Information from '@/views/information';
import { Route } from 'react-router-dom';

const Com = () => (
  <div className = "container">
    <Route path = "/information" component = { Information }/>
  </div>
)

export default Com;
