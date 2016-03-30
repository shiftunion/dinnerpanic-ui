import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import LeftSubMenuItem from './LeftSubMenuItem';

export default class LeftMenuItem extends React.Component {
  /*  constructor(props) {
   super(props);
   }*/


  render() {
    return (
      <li>
        <Link to={"/" + this.props.route}>
          <span className="icon color5">
            <i className="fa fa-home"/>
          </span>{this.props.displayText}
          <span className="label label-default">{this.props.count}</span>

          {
            this.props.subMenuItems != null
              ? <span className="caret"></span>
              : null
          }

          {
            this.props.subMenuItems != null
              ? <LeftSubMenuItem menuItems={this.props.subMenuItems.menuitem}></LeftSubMenuItem>
              : null
          }
        </Link>
      </li>

    );
  }
}

// Some validation of properties
LeftMenuItem.propTypes = {
  displayText: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  subMenuItems: React.PropTypes.object
};



