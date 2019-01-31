import React from 'react';
import { connect } from 'react-redux';
import CategoryListItem from './CategoryListItem';
import AddCategoryPage from './AddCategoryPage';
import selectCategories from '../../selectors/categories';

export const CategoriesList = (props) => (
  <div>
    {
      props.categories.length === 0 ? (
        <p>No categories</p>
      ) : (
          props.categories.map((category) => {
            return <CategoryListItem key={category.id} {...category} />;
          })
        )
    }
    <AddCategoryPage />
  </div>
);

const mapStateToProps = (state) => {
  return {
    categories: selectCategories(state.categories)
  };
};

export default connect(mapStateToProps)(CategoriesList);
