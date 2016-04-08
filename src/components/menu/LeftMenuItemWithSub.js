import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import LeftSubMenuItem from './LeftSubMenuItem';


export default class LeftMenuItemWithSub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showSubMenu: false};
    this.onClick = this.onClick.bind(this);
  }

onClick() {
    this.setState({showSubMenu: !this.state.showSubMenu});

  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.onClick}>
          <span className="icon color5">
            <i className="fa fa-home"/>
          </span>{this.props.displayText}
          <span className="caret"></span>
          {this.props.count > 0
            ? <span className="label label-default">{this.props.count}</span>
            : null}
        </a>
        {this.state.showSubMenu ?
          <LeftSubMenuItem parentRoute={this.props.route} menuItems={this.props.subMenuItems.menuitem}/> : null}
      </li>
    );
  }


}

// Some validation of properties
LeftMenuItemWithSub.propTypes = {
  displayText: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  subMenuItems: React.PropTypes.object,
  route: React.PropTypes.string
};



