import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class LeftMenuItem extends React.Component {

  render() {
    return (
      <li>
        <Link to={"/" + this.props.route}
              style={this.props.isSelected ? {color: 'white'} : null}
              onClick={e => this.props.selectMenuItem(this.props.route)}>
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
  route: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool,
  selectMenuItem: React.PropTypes.func
};



