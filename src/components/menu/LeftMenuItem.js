import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ACTIVE = { color: 'white' };

export default class LeftMenuItem extends React.Component {
  /*  constructor(props) {
   super(props);
   }*/


  render() {
    return (
      <li>
        <Link to={"/" + this.props.route} activeStyle={ACTIVE}>
          <span className="icon color5">
            <i className="fa fa-home"/>
          </span>{this.props.displayText}
          {this.props.count > 0
            ? <span className="label label-default">{this.props.count}</span>
            : null}
        </Link>
      </li>
    );
  }
}

// Some validation of properties
LeftMenuItem.propTypes = {
  displayText: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  route: React.PropTypes.string.isRequired
};



