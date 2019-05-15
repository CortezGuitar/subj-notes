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

  render() {
    const { notes, removeNote, loading } = this.props;

    if (loading) {
      return <h2 className="text-warning text-center">Loading...</h2>;
    }

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
    return <h2 className="text-warning text-center">Loading...</h2>;
  }
}

const mapStateToProps = ({ notes, loading }) => {
  return { notes, loading };
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
