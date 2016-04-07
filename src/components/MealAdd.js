'use strict'

import React from 'react';
import {connect} from 'react-redux'
import {addMeal} from '../actions/actions'
import MealList from './MealList'


class MealAdd extends React.Component {
  render() {

    let input;

    return (
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        this.props.dispatch(addMeal(input.value));
        input.value = ''
      }}>
        <input ref={node => {input = node}}/>
        <button type="submit">
          Add Meal
        </button>
      </form>
    );
  }
}


export default connect()(MealAdd);




