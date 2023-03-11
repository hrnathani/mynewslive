import React, { Component } from 'react';
import loder from './loding.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loder} alt="Loading..."/>
      </div>
    );
  }
}
