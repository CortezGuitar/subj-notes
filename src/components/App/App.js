import React from 'react';

import NoteList from '../NoteList';
import Form from '../Form';

function App() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid bg-success p-1 mb-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-1">
              <h1 className="display-4">Subj Notes</h1>
              <button
                className="btn btn-lg btn-outline-primary w-50"
                type="button"
              >
                Create Note
              </button>
            </div>
            <div className="col-md-6 my-1">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <NoteList />
    </div>
  );
}

export default App;
