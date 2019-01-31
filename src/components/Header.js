import React from 'react';
import { connect } from 'react-redux';
import selectCategories from '../selectors/categories';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: props.categories ? props.categories : '',
      onCategoryChange: props.onCategoryChange
    }
  }
  render() {
    return (
      <header className="row">
        <h1>myLocation</h1>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: selectCategories(state.categories)
  };
};

export default connect(mapStateToProps)(Header);
