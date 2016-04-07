import startState  from '../store/initialState';


const meals = (state = startState, action) => {
  switch (action.type) {
    case 'ADD_MEAL':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
      {}
      );
    default:
      return state
  }
}

export default meals
