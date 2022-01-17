/* eslint class-methods-use-this: "off" */
import React, { Component } from 'react';
import '../../styles/output.css';

export class Header extends Component {
  render() {
    return (
      <header className='p-10 text-slate-500 text-6xl font-bold bg-neutral-100 text-center rounded-t-xl'>
        <p>CRA TO-DO</p>
      </header>
    );
  }
}
