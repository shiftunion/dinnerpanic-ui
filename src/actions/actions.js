let nextTodoId = 0;

export const addMeal = (meal) => {
  return {
    type: 'ADD_MEAL',
    id: nextTodoId++,
    meal
  };
};

export const removeMeal = (mealId) => {
  return {
    type: 'REMOVE_MEAL',
    mealId
  };
};

export const modifyMeal = (meal) => {
  return {
    type: 'MODIFY_MEAL',
    meal
  };
};

export const toggleMenuVisibility = (menuId) => {
  return {
    type: 'TOGGLE_SUBMENU_VISIBILITY',
    menuId
  };
};


export const selectMenuItem = (menuId) => {
  return {
    type: 'SELECT_MENU_ITEM',
    menuId
  };
};
