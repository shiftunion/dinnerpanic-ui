import React, {PropTypes} from 'react';



const MealList = ({ meals }) => (
  <ul>
    {meals.map((x, i) =>
      <li key={x.id}>{x.value}</li>
    )}
  </ul>
);


/*class MealList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.meals.map((x, i) =>
          <li key={x.id}>{x.value}</li>
        )}
      </ul>

    );
  }
}*/

// Some validation of properties
MealList.propTypes = {
  meals: React.PropTypes.array.isRequired
};


export default MealList;

