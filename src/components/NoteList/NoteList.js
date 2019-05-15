import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Note from '../Note';
import withSubjService from '../hoc';
import { fetchNotes, removeNote } from '../../store/actions';

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  componentDidUpdate() {
    if (this.props.error) {
      this.props.fetchNotes();
    }
  }

  render() {
    const { notes, removeNote } = this.props;
    if (notes) {
      return (
        <div className="d-flex flex-wrap justify-content-around">
          {notes.map(({ id, title, content }) => (
            <Note
              key={id}
              title={title}
              content={content}
              removeNote={removeNote}
              id={id}
            />
          ))}
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = ({ notes, error }) => {
  return { notes, error };
};

const mapDispatchToProps = (dispatch, { subjService }) => {
  return bindActionCreators(
    {
      fetchNotes: fetchNotes(subjService),
      removeNote: removeNote(subjService)
    },
    dispatch
  );
};

export default withSubjService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteList)
);
