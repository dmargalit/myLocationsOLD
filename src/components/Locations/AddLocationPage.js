import React from 'react';
import { connect } from 'react-redux';
import LocationForm from './LocationForm';
import { startAddLocation } from '../../actions/locations';

export class AddLocationPage extends React.Component {
  onSubmit = (location) => {
    this.props.startAddLocation(location);
  };
  render() {
    return (
      <div className="col">
        <LocationForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddLocation: (location) => dispatch(startAddLocation(location))
});

export default connect(undefined, mapDispatchToProps)(AddLocationPage);
