'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
const ACTIVE = {color: 'white'};

class LeftSubMenuItem extends React.Component {
  /*  constructor(props) {
   super(props);
   }

   componentDidMount() {
   console.log('im here');
   }
   */

  render() {
    return (
      <ul>
        {this.props.menuItems.map((x, i) =>
          <li key={x.id}><Link key={i} to={'/' + this.props.parentRoute +'/'+ x.id}
                               activeStyle={ACTIVE}>{x.value}</Link></li>
        )}
      </ul>

    );
  }
}

// Some validation of properties
LeftSubMenuItem.propTypes = {
  menuItems: React.PropTypes.array,
  parentRoute: React.PropTypes.string
};


export default LeftSubMenuItem;

