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

const createNoteRequested = () => {
  return {
    type: 'CREATE_NOTE_REQUEST'
  };
};

const createNoteLoaded = note => {
  return {
    type: 'CREATE_NOTE_SUCCESS',
    payload: note
  };
};

const createNoteError = error => {
  return {
    type: 'CREATE_NOTE_FAILURE',
    payload: error
  };
};

const createNote = subjService => note => dispatch => {
  dispatch(createNoteRequested());
  subjService
    .createNote(note)
    .then(data => dispatch(createNoteLoaded(data)))
    .catch(error => dispatch(createNoteError(error)));
};

const removeNoteRequested = () => {
  return {
    type: 'REMOVE_NOTE_REQUEST'
  };
};

const removeNoteLoaded = id => {
  return {
    type: 'REMOVE_NOTE_SUCCESS',
    payload: id
  };
};

const removeNoteError = error => {
  return {
    type: 'REMOVE_NOTE_FAILURE',
    payload: error
  };
};

const removeNote = subjService => id => dispatch => {
  dispatch(removeNoteRequested());
  subjService
    .removeNote(id)
    .then(dispatch(removeNoteLoaded(id)))
    .catch(error => dispatch(removeNoteError(error)));
};

const updateNoteRequested = () => {
  return {
    type: 'UPDATE_NOTE_REQUEST'
  };
};

const updateNoteLoaded = note => {
  return {
    type: 'UPDATE_NOTE_SUCCESS',
    payload: note
  };
};

const updateNoteError = error => {
  return {
    type: 'UPDATE_NOTE_FAILURE',
    payload: error
  };
};

const updateNote = subjService => (id, body) => dispatch => {
  dispatch(updateNoteRequested());
  subjService
    .updateNote(id, body)
    .then(data => dispatch(updateNoteLoaded(data)))
    .catch(error => dispatch(updateNoteError(error)));
};

export { fetchNotes, createNote, removeNote, updateNote };
