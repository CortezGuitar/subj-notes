import React from 'react';
import { Link } from 'react-router-dom';

const Note = ({ title, content, id, removeNote }) => {
  const onRemoveHandler = id => {
    removeNote(id);
  };

  return (
    <div className="card mt-2" style={{ width: '14rem' }}>
      <h5 className="card-header bg-warning">{title}</h5>
      <div className="card-body">
        <p className="card-text">{content}</p>
        <div className="d-flex btn-group">
          <Link
            to={{ pathname: `/edit-note/${id}`, state: { title, content, id } }}
            className="btn btn-outline-info"
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => onRemoveHandler(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
