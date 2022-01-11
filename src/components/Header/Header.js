import React, { Component } from 'react';
import s from './Header.module.css';

export class Header extends Component {
  render() {
    return (
      <header className={s.appHeader}>
        <div>CRA TO DO</div>
      </header>
    );
  }
}