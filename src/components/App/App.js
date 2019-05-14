import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import NoteList from '../NoteList';
import Form from '../Form';

function App({ notes }) {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid bg-light p-2 mb-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-1">
              <Link
                to="/create-note"
                style={{ textDecoration: 'none' }}
                className="btn btn-primary"
              >
                <h1 className="display-4">Subj Notes</h1>
              </Link>
            </div>
            <div className="col-md-6 my-1">
              <Route path="/create-note" component={Form} />
              <Route
                path="/edit-note/:id"
                render={props => <Form {...props} notes={notes} />}
              />
            </div>
          </div>
        </div>
      </div>
      <NoteList />
    </div>
  );
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(App);
