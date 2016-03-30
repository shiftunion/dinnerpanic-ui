import React, {PropTypes} from 'react';
import {Link} from 'react-router';

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
          <li key={i}><Link key={i} to={x.value}>{x.value}</Link></li>
        )}
      </ul>
    );
  }


}

// Some validation of properties
LeftSubMenuItem.propTypes = {
  menuItems: React.PropTypes.array
};

export default LeftSubMenuItem;

