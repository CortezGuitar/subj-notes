import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { createNote, updateNote } from '../../store/actions';
import withSubjService from '../hoc';

class Form extends Component {
  state = {
    title: this.props.location.state ? this.props.location.state.title : '',
    content: this.props.location.state ? this.props.location.state.content : '',
    id: this.props.location.state ? this.props.location.state.id : '',
    undo: false
  };

  notificationDOMRef = React.createRef();
  addNotification() {
    this.notificationDOMRef.current.addNotification({
      title: 'Awesomeness',
      message: 'Awesome Notifications!',
      content: (
        <div className="alert alert-success" style={{ fontFamily: '"Neucha"' }}>
          <p>
            Note will be created/removed in 2 seconds. Click "UNDO" to cancel
            operation.
          </p>
          <button
            className="btn btn-block btn-outline-danger"
            onClick={() => this.setState({ undo: true })}
          >
            UNDO
          </button>
        </div>
      ),
      type: 'success',
      insert: 'top',
      container: 'bottom-right',
      animationIn: ['animated', 'bounceIn'],
      animationOut: ['animated', 'bounceOut'],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.state) {
      if (this.props.location.state.id !== prevProps.location.state.id) {
        this.setState({
          title: this.props.location.state.title,
          content: this.props.location.state.content,
          id: this.props.location.state.id
        });
      }
    }

    if (this.state.undo) {
      clearTimeout(this.timeoutId);
      this.setState({ undo: false });
    }
  }

  onSubmitHandler = e => {
    e.preventDefault();
    const { title, content, id, undo } = this.state;
    const { onCreateNote, onUpdateNote } = this.props;

    let newNote;

    if (id) {
      newNote = {
        title,
        content
      };
      onUpdateNote(id, newNote);
      this.props.history.push('/');
    } else {
      this.addNotification();
      this.timeoutId = setTimeout(() => {
        newNote = {
          title,
          content
        };
        if (undo === true) {
          return;
        }
        onCreateNote(newNote);
        this.props.history.push('/');
      }, 2000);
    }
  };


  onChangeHandler = e => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <ReactNotification ref={this.notificationDOMRef} />
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
            <button
              type="submit"
              className="btn btn-outline-primary"
              //
            >
              Submit
            </button>
            <Link to="/" className="btn btn-outline-primary">
              Back
            </Link>
          </div>
        </form>
      </div>
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
