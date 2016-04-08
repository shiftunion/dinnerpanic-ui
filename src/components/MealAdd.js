'use strict';

import React, {Component, PropTypes} from 'react';



class MealAdd extends React.Component {
  render() {

    let input;

    return (
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        this.props.addMeal(input.value);
        input.value = '';
      }}>
        <input ref={node => {input = node;}}/>
        <button type="submit">
          Add Meal
        </button>
      </form>
    );
  }
}

MealAdd.propTypes = {
  addMeal: PropTypes.func.isRequired
};


export default MealAdd;




