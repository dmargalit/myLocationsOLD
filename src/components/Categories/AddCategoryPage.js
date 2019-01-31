import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import { startAddCategory } from '../../actions/categories';

export class AddCategoryPage extends React.Component {
  onSubmit = (category) => {
    this.props.startAddCategory(category);
  };
  render() {
    return (
      <div>
        <CategoryForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddCategory: (category) => dispatch(startAddCategory(category))
});

export default connect(undefined, mapDispatchToProps)(AddCategoryPage);
