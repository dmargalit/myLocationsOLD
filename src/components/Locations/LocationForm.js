import React from 'react';
import { connect } from 'react-redux';
import CatgoriesSelect from './CatgoriesSelect';
import selectCategories from '../../selectors/categories';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.location ? props.location.name : '',
      address: props.location ? props.location.address : '',
      coordinates: props.location ? props.location.coordinates : '',
      category: props.location ? props.location.category :
        props.categories.length ? props.categories[0].name : '',
      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };
  oncoordinatesChange = (e) => {
    const coordinates = e.target.value;
    this.setState(() => ({ coordinates }));
  };
  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState(() => ({ error: 'Please provide location name.' }));
    } else if (!this.state.address) {
      this.setState(() => ({ error: 'Please provide location address.' }));
    } else if (!this.state.coordinates) {
      this.setState(() => ({ error: 'Please provide location coordinates.' }));
    } else if (!this.state.category) {
      this.setState(() => ({ error: 'Please select location category.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        address: this.state.address,
        coordinates: this.state.coordinates,
        category: this.state.category
      });
      this.setState(() => ({
        name: '',
        address: '',
        coordinates: '',
      }));
    }
  };
  render() {
    return (
      <div>
        <h4 className="mb-3">Add Location</h4>
        <div className="col">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <input
                type="text"
                placeholder="Name"
                autoFocus
                value={this.state.name}
                onChange={this.onNameChange}
                className="form-control"
              />
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Address"
                value={this.state.address}
                onChange={this.onAddressChange}
                className="form-control"
              />
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="coordinates"
                value={this.state.coordinates}
                onChange={this.oncoordinatesChange}
                className="form-control"
              />
            </div>
            <div className="row">
              <CatgoriesSelect
                onCategoryChange={this.onCategoryChange}
              />
            </div>
            <div className="row">
              {this.state.error && <p className="alert alert-danger">{this.state.error}</p>}
            </div>
            <hr className="mb-4" />
            <div className="row">
              <button className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: selectCategories(state.categories)
  };
};

export default connect(mapStateToProps)(LocationForm);
