import React from 'react';

import Note from '../Note';

const NoteList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NoteList;
