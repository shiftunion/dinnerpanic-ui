import React from 'react';
import {Link} from 'react-router';

export default class Meals extends React.Component {
  /*  constructor(props) {
   super(props);
   }*/

  componentDidMount() {
    console.log('im here');
  }

  render() {
    return (
      <div className="content">
        <h4>
          MEals2 are here
        </h4>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
}

export default Meals;
