/* eslint class-methods-use-this: "off" */
import React, { Component } from 'react';
import '../../styles/output.css';

export class Header extends Component {
  render() {
    return (
      <header className='p-10 text-slate-500 font-medium bg-red-300'>
        <p>CRA TO DO</p>
      </header>
    );
  }
}
