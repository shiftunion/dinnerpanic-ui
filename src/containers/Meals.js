'use strict'

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions'
import {bindActionCreators} from 'redux';
import MealList from './../components/MealList'
import MealAdd from './../components/MealAdd'


class Meals extends React.Component {
  static propTypes = {
    meals: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };


  render() {

    return (
      <div className="content">
        <MealAdd/>
        <MealList meals={this.props.meals} addMeal={this.props.actions.addMeal} />
      </div>
    );
  }
}

/* Magic functions */
const mapStateToProps = (state) => {
  return {meals: state.mealsAppState.meals};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Meals)




