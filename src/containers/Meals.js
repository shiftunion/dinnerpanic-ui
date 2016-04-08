'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {bindActionCreators} from 'redux';
import MealList from './../components/MealList';
import MealAdd from './../components/MealAdd';


class Meals extends React.Component {
  static propTypes = {
    meals: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {

    return (
      <div className="content">
        <MealAdd addMeal={this.props.actions.addMeal}/>
        <MealList meals={this.props.meals}/>
      </div>
    );
  }
}

/* Magic function 1 */
const mapStateToProps = (state) => {
  return {meals: state.mealsAppState.meals};
};

/* Magic function 2 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals);




