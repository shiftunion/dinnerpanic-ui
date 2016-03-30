import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import LeftSubMenuItem from './LeftSubMenuItem';

export default class LeftMenuItemWithSub extends React.Component {
  /*  constructor(props) {
   super(props);
   }*/


  render() {
    return (
      <li>
        <Link to="#">
          <span className="icon color5">
            <i className="fa fa-home"/>
          </span>{this.props.displayText}
          <span className="caret"></span>
          <span className="label label-default">{this.props.count}</span>
        </Link>
        <LeftSubMenuItem menuItems={this.props.subMenuItems.menuitem}></LeftSubMenuItem>
      </li>
    );
  }
}

// Some validation of properties
LeftMenuItemWithSub.propTypes = {
  displayText: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  subMenuItems: React.PropTypes.object
};



