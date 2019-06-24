import React from 'react';
import Recommend from '@/views/recommend';
import { Route } from 'react-router-dom';

const Com = () => (
  <div className = "container">
    <Route path = "/recommend" component = { Recommend }/>
  </div>
)

export default Com;
