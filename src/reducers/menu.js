import {lhsMenuInitState}  from '../store/initialState';
import objectAssign from 'object-assign';


const menu = (state = lhsMenuInitState, action) => {
  switch (action.type) {
    case 'TOGGLE_SUBMENU_VISIBILITY':
    {
      let newState = objectAssign({}, state);
      let subMenu = newState.menu.find(obj => obj.id === action.menuId).submenu;
      subMenu.visible = !subMenu.visible;
      return newState;
    }
    case 'SELECT_MENU_ITEM':
    {
      let newState = objectAssign({}, state);
      newState.selectedMenuId = action.menuId;
      return newState;
    }

    default:
      return state;
  }
};

export default menu;
