const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NOTES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_NOTES_SUCCESS':
      return {
        ...state,
        notes: action.payload.notes,
        loading: false,
        error: null
      };
    case 'FETCH_NOTES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'CREATE_NOTE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CREATE_NOTE_SUCCESS':
      return {
        ...state,
        notes: [...state.notes, action.payload],
        loading: false,
        error: null
      };
    case 'CREATE_NOTE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'REMOVE_NOTE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'REMOVE_NOTE_SUCCESS':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case 'REMOVE_NOTE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'UPDATE_NOTE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'UPDATE_NOTE_SUCCESS':
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? (note = action.payload) : note
        )
      };
    case 'UPDATE_NOTE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
