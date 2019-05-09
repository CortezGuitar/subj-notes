import React from 'react';
import { Route, Link } from 'react-router-dom';

import NoteList from '../NoteList';
import Form from '../Form';

function App() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid bg-success p-1 mb-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-1">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className="display-4">Subj Notes</h1>
              </Link>
              <Link to="/create-note">
                <button
                  className="btn btn-lg btn-outline-primary w-50"
                  type="button"
                >
                  Create Note
                </button>
              </Link>
            </div>
            <div className="col-md-6 my-1">
              <Route path="/create-note" component={Form} />
            </div>
          </div>
        </div>
      </div>
      <NoteList />
    </div>
  );
}

export default App;
