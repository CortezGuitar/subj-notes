const notesRequested = () => {
  return {
    type: 'FETCH_NOTES_REQUEST'
  };
};

const notesLoaded = notes => {
  return {
    type: 'FETCH_NOTES_SUCCESS',
    payload: notes
  };
};

const notesError = error => {
  return {
    type: 'FETCH_NOTES_FAILURE',
    payload: error
  };
};

const fetchNotes = subjService => () => dispatch => {
  dispatch(notesRequested());
  subjService
    .getNotes()
    .then(data => dispatch(notesLoaded(data)))
    .catch(error => dispatch(notesError(error)));
};

const createNote = note => {
  return {
    type: 'CREATE_NOTE',
    payload: note
  };
};

const removeNote = id => {
  return {
    type: 'REMOVE_NOTE',
    payload: id
  };
};

export { fetchNotes, createNote, removeNote };
