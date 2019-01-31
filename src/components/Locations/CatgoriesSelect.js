import React from 'react';
import { connect } from 'react-redux';
import selectCategories from '../../selectors/categories';

export class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories ? props.categories : '',
      onCategoryChange: props.onCategoryChange
    }
  }
  render() {
    return (
      <select onChange={this.state.onCategoryChange} className="custom-select">
        {
          this.state.categories.length === 0 ? (
            <option>No categories</option>
          ) : (
              this.state.categories.map((category) => {
                return <option key={category.id} value={category.name}>{category.name} </option>;
              })
            )
        }
      </select>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    categories: selectCategories(state.categories)
  };
};

export default connect(mapStateToProps)(CategoriesList);
