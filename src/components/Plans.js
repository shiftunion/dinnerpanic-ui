import React from 'react';
import {Link} from 'react-router';

export default class Plans extends React.Component {

  render() {
    return (
      <div className="content">
        <h4>
          Plans are here
        </h4>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
}

export default Plans;
