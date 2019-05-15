import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class Note extends Component {
  state = { undo: false };

  onRemoveHandler = id => {
    this.addNotification();
    this.timeoutId = setTimeout(() => {
      this.props.removeNote(id);
    }, 2000);
  };

  componentDidUpdate() {
    if (this.state.undo) {
      clearTimeout(this.timeoutId);
      this.setState({ undo: false });
    }
  }

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
  render() {
    const { title, content, id } = this.props;
    return (
      <div>
        <ReactNotification ref={this.notificationDOMRef} />
        <div className="card mt-2" style={{ width: '14rem' }}>
          <h5 className="card-header bg-warning">{title}</h5>
          <div className="card-body">
            <p className="card-text">{content}</p>
            <div className="d-flex btn-group">
              <Link
                to={{
                  pathname: `/edit-note/${id}`,
                  state: { title, content, id }
                }}
                className="btn btn-outline-info"
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => this.onRemoveHandler(id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
