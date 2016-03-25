import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class LeftMenuItem extends React.Component {
  /*  constructor(props) {
   super(props);
   }*/


  render() {
    return (
      <li>
        <Link to="/dashboard2">
          <span className="icon color5">
            <i className="fa fa-home"/>
          </span>{this.props.displayText}
          <span className="label label-default">{this.props.count}</span>
        </Link>
      </li>
    );
  }
}

// Some validation of properties
LeftMenuItem.propTypes = {
  displayText: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired
};

export default LeftMenuItem;

