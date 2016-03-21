import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const LeftMenuItem = () => {
  return (
    <li>
      <Link to="/dashboard2">
    <span className="icon color5">
      <i className="fa fa-home"></i>
    </span>Dashboard2
        <span className="label label-default">2</span>
      </Link>
    </li>
  )
};


export default LeftMenuItem;

