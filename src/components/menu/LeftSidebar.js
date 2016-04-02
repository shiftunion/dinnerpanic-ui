import React, {PropTypes} from 'react';
import LeftMenuItem from './LeftMenuItem';
import LeftMenuItemWithSub from './LeftMenuItemWithSub';

const lhsMenu = {
  "menu": [
    {
      "id": "meals",
      "value": "Meals"
    },
    {
      "id": "charts",
      "value": "Charts"
    },
    {
      "id": "plans",
      "value": "Plans"
    },
    {
      "id": "calendar",
      "value": "Calendar",
      "submenu": {
        "menuitem": [
          {"value": "Today", "id": "today"},
          {"value": "Weekly", "id": "weekly"},
          {"value": "Monthly", "id": "monthly"}
        ]
      }
    }
  ]
};


// Since this component is simple and static, there's no parent container for it.
const LeftSidebar = () => {
  return (
    <div className="sidebar clearfix">

      <ul className="sidebar-panel nav">

        {[...lhsMenu["menu"]].map((x, i) =>
          x.submenu != null ?
            <LeftMenuItemWithSub key={x.id} displayText={x.value} count={3} route={x.id} subMenuItems={x.submenu}/> :
            <LeftMenuItem key={x.id} displayText={x.value} count={3} route={x.id}/>
        )}

      </ul>
    </div>
  );
};

export default LeftSidebar;
