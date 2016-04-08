'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class LeftSubMenuItem extends React.Component {

  render() {
    return (
      <ul>
        {this.props.menuItems.map((x, i) =>
          <li key={x.id}>
            <Link key={x.id}
                  to={'/' + this.props.parentRoute +'/'+ x.id}
                  style={this.props.selectedMenuId === x.id ? {color: 'white'} : null}
                  onClick={e => this.props.selectMenuItem(x.id)}>
              {x.value}
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

// Some validation of properties
LeftSubMenuItem.propTypes = {
  menuItems: React.PropTypes.array.isRequired,
  selectedMenuId: React.PropTypes.string.isRequired,
  parentRoute: React.PropTypes.string.isRequired,
  selectMenuItem: React.PropTypes.func.isRequired

};

export default LeftSubMenuItem;

