import React from 'react';
import {Link} from 'react-router';

export default class Calendar extends React.Component {
  /*  constructor(props) {
   super(props);
   }*/

  render() {
    return (
      <div className="content">
        <h4>
          Calendar are here
        </h4>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
}

export default Calendar
