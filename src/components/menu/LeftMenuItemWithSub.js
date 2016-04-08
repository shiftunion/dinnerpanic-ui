import React, {PropTypes} from 'react';
import LeftSubMenuItem from './LeftSubMenuItem';


export default class LeftMenuItemWithSub extends React.Component {

  render() {
    return (
      <li>
        <a href="#"
           onClick={e => this.props.toggleMenuVisibility(this.props.route)}>
          <span className="icon color5">
            <i className="fa fa-home"/>
          </span>{this.props.displayText}
          <span className="caret"></span>
          {this.props.count > 0
            ? <span className="label label-default">{this.props.count}</span>
            : null}
        </a>
        {this.props.subMenuItems.visible ?
          <LeftSubMenuItem selectedMenuId={this.props.selectedMenuId}
                           parentRoute={this.props.route}
                           menuItems={this.props.subMenuItems.menuitem}
                           selectMenuItem={this.props.selectMenuItem}/> : null
            }
      </li>
    );
  }
}

// Some validation of properties
LeftMenuItemWithSub.propTypes = {
  displayText: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  subMenuItems: React.PropTypes.object,
  route: React.PropTypes.string,
  selectedMenuId: React.PropTypes.string,
  toggleMenuVisibility: React.PropTypes.func,
  selectMenuItem: React.PropTypes.func
};



