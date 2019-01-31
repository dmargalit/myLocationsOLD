import React from 'react';

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.category ? props.category.name : '',
      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState(() => ({ error: 'Please provide category name.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
      });
      this.setState(() => ({ name: '' }));
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Name"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <button>Save</button>
        </form>
      </div>
    )
  }
}
