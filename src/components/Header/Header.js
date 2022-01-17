/* eslint class-methods-use-this: "off" */
import React, { Component } from 'react';
import '../../styles/output.css';

export class Header extends Component {
  render() {
    return (

      <header className='bg-slate-100' >
        <div className='p-10 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l
      from-emerald-500 to-fuchsia-500 text-center'>
          <p>CRA TO-DO</p>
        </div>
      </header>
    );
  }
}
