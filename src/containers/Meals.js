'use strict'

import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {addMeal} from '../actions/actions'
import {createStore} from 'redux'
import MealList from './../components/MealList'
import MealAdd from './../components/MealAdd'


class Meals extends React.Component {
  render() {

    let input;

    return (
      <div className="content">
          <MealAdd/>
          <MealList/>
      </div>
    );
  }
}

/* Magic function */
const mapStateToProps = (state) => {
  return {meals: state.mealAppState};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}



let Dude = connect(mapStateToProps, mapDispatchToProps)(MealList);

export default Dude;




