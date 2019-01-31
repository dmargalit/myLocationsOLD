import React from 'react';
import { connect } from 'react-redux';
import LocationForm from './LocationForm';
import { editLocation, startRemoveLocation } from '../../actions/locations';

export class EditLocationPage extends React.Component {
  onSubmit = (location) => {
    this.props.editLocation(this.props.location.id, location);
    this.props.history.push('/locations');
  };
  onRemove = () => {
    this.props.startRemoveLocation({ id: this.props.location.id });
    this.props.history.push('/locations');
  };
  render() {
    return (
      <div>
        <LocationForm
          location={this.props.location}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  location: state.locations.find((location) => location.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editLocation: (id, location) => dispatch(editLocation(id, location)),
  startRemoveLocation: (data) => dispatch(startRemoveLocation(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLocationPage);
