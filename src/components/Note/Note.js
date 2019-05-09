import React from 'react';

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
          <button type="button" className="btn btn-info">
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
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
