import React, {PropTypes} from 'react';

class MealList extends React.Component {
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
        {this.props.meals.map((x, i) =>
          <li key={x.id}>{x.value}</li>
        )}
      </ul>

    );
  }
}

// Some validation of properties
MealList.propTypes = {
  meals: React.PropTypes.array
};


export default MealList;

