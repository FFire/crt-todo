import React, { Component } from "react";
import s from "./Filter.module.css";

export class Filter extends Component {

  render() {
    const { stateFilterNames, stateFilter, textFilter, handleStateFilter } = this.props;
    const filterList = stateFilterNames.map((filterName) => (
      <span key={filterName}>
        <input type="radio" id={`filter-${filterName}`}
          name="show" value={filterName}
          checked={stateFilter === filterName}
          onChange={handleStateFilter}
        />
        <label>{filterName}</label>
      </span>));

    return (
      <div className={s.filter}>

        <form >
          <input
            name='text'
            value={textFilter}
            onChange={this.props.handleTextFilter}
            autoComplete="off"
            placeholder="Filter tasks"
          />

          {filterList}

          <button
            className={s.button}
            onClick={this.props.handleDeleteCompleted}
          >Delete completed</button>
        </form>

      </div>
    )
  }
}