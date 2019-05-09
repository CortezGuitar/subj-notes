/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNote } from '../../store/actions';

class Form extends Component {
  state = {
    title: '',
    content: ''
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { title, content } = this.state;

    const newNote = {
      title,
      content,
      id: Math.random() * 200
    };

    this.props.onCreateNote(newNote);
    this.setState({ title: '', content: '' });
  };

  onChangeHandler = e => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="title" className="w-100">
            <span>Title:</span>
            <input
              type="text"
              className="form-control"
              placeholder="Note Title..."
              id="title"
              name="title"
              onChange={this.onChangeHandler}
              value={this.state.title}
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="content" className="w-100">
            <span>Content:</span>
            <textarea
              type="text"
              className="form-control"
              placeholder="Note Content..."
              id="content"
              name="content"
              rows="2"
              onChange={this.onChangeHandler}
              value={this.state.content}
              required
            />
          </label>
        </div>
        <div className="btn-group d-flex">
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onCreateNote: createNote
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
