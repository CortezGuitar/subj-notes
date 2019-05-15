import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { createNote, updateNote } from '../../store/actions';
import withSubjService from '../hoc';

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
    const { onCreateNote, onUpdateNote } = this.props;
    let newNote;

    if (id) {
      newNote = {
        title,
        content
      };
      onUpdateNote(id, newNote);
    } else {
      newNote = {
        title,
        content
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

const mapDispatchToProps = (dispatch, { subjService }) => {
  return bindActionCreators(
    {
      onCreateNote: createNote(subjService),
      onUpdateNote: updateNote(subjService)
    },
    dispatch
  );
};

export default withSubjService(
  connect(
    null,
    mapDispatchToProps
  )(Form)
);
