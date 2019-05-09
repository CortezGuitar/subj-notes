/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Form extends Component {
  state = {
    show: true
  };

  render() {
    const { show } = this.state;
    if (show) {
      return (
        <form>
          <div className="form-group">
            <label htmlFor="title" className="w-100">
              <span>Title:</span>
              <input
                type="text"
                className="form-control"
                placeholder="Note Title..."
                id="title"
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="content" className="w-100">
              <span>Content:</span>
              <textarea
                type="text"
                className="form-control"
                placeholder="Note Content..."
                id="content"
                rows="2"
              />
            </label>
          </div>
          <div className="btn-group d-flex">
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button type="reset" className="btn btn-outline-secondary">
              Reset
            </button>
          </div>
        </form>
      );
    }

    return <div />;
  }
}

export default Form;
