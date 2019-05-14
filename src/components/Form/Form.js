import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createNote, editNote } from '../../store/actions';

class Form extends Component {
  state = {
    title: this.props.location.state ? this.props.location.state.title : '',
    content: this.props.location.state ? this.props.location.state.content : '',
    id: this.props.location.state ? this.props.location.state.id : ''
  };

  componentDidMount() {
    console.log(this.props.location.state);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.state) {
      if (this.props.location.state.id !== prevProps.location.state.id) {
        this.setState({
          title: this.props.location.state.title,
          content: this.props.location.state.content,
          id: this.props.location.state.id
        });
      }
    }
  }

  onSubmitHandler = e => {
    e.preventDefault();
    const { title, content, id } = this.state;
    const { onCreateNote, onEditNote } = this.props;
    let newNote;

    if (id) {
      newNote = {
        title,
        content,
        id
      };
      onEditNote(newNote);
    } else {
      newNote = {
        title,
        content,
        id: (Math.random() * 200).toString()
      };
      onCreateNote(newNote);
    }

    this.props.history.push('/');
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
          <Link to="/" className="btn btn-outline-primary">
            Back
          </Link>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onCreateNote: createNote,
  onEditNote: editNote
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
