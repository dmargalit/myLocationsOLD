import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import { editCategory, startRemoveCategory } from '../../actions/categories';

export class EditCategoryPage extends React.Component {
  onSubmit = (category) => {
    this.props.editCategory(this.props.category.id, category);
    this.props.history.push('/categories');
  };
  onRemove = () => {
    this.props.startRemoveCategory({ id: this.props.category.id });
    this.props.history.push('/categories');
  };
  render() {
    return (
      <div>
        <CategoryForm
          category={this.props.category}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  category: state.categories.find((category) => category.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editCategory: (id, category) => dispatch(editCategory(id, category)),
  startRemoveCategory: (data) => dispatch(startRemoveCategory(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryPage);
