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
        notes: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_NOTES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'CREATE_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };

    case 'REMOVE_NOTE':
      return {
        notes: state.notes.filter(note => note.id !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
