import startState  from '../store/initialState';
import objectAssign from 'object-assign';


const meals = (state = startState, action) => {
  switch (action.type) {
    case 'ADD_MEAL':
    {
      let newState = objectAssign({}, state);
      newState.meals = [...newState.meals,
        {
          id: action.id,
          value: action.meal
        }];

      return newState;
    }


    case 'TOGGLE_TODO':
      return state.map(t => {
        }
      );
    default:
      return state;
  }
};

export default meals;
