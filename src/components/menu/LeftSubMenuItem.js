import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class LeftSubMenuItem extends React.Component {
  /*  constructor(props) {
   super(props);
   }*/

  componentDidMount() {
    console.log('im here');
  }

  render() {
    return (
      <ul>
        <li><a href="icons.html">Icons</a></li>
        <li><a href="tabs.html">Tabs</a></li>
        <li><a href="buttons.html">Buttons</a></li>
        <li><a href="panels.html">Panels</a></li>
        <li><a href="notifications.html">Notifications</a></li>
        <li><a href="modal-boxes.html">Modal Boxes</a></li>
        <li><a href="progress-bars.html">Progress Bars</a></li>
        <li><a href="others.html">Others<span className="label label-danger">NEW</span></a></li>
      </ul>
    );
  }




}

// Some validation of properties
LeftSubMenuItem.propTypes = {
  menuItems: React.PropTypes.array
};

export default LeftSubMenuItem;

