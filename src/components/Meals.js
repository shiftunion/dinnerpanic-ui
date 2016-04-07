import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {addMeal} from '../actions/actions'





  let Meals = ({ dispatch }) => {
    let input;

    return (
      <div className="content">
        <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addMeal(input.value));
        input.value = ''
      }}>
          <input ref={node => {input = node}}/>
          <button type="submit">
            Add Meal
          </button>
        </form>
      </div>
    );
  };

Meals = connect()(Meals);

export default Meals;




