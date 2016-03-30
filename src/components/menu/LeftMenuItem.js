import React, {PropTypes} from 'react';
import {Link} from 'react-router';


export default class LeftMenuItem extends React.Component {
  /*  constructor(props) {
   super(props);
   }*/


  render() {
    return (
      <li>
        <Link to={"/" + this.props.route}>
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
  count: React.PropTypes.number.isRequired,
  route: React.PropTypes.string.isRequired
};



