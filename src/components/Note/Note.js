import React from 'react';

const Note = () => {
  return (
    <div className="card mt-2" style={{ width: '14rem' }}>
      <h5 className="card-header bg-warning">Title</h5>
      <div className="card-body">
        <p className="card-text">
          {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat esse consectetur deleniti facilis vel soluta eveniet cumque velit praesentium magni.`}
        </p>
        <div className="d-flex btn-group">
          <button type="button" className="btn btn-info">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
