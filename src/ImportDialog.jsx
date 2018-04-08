import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ImportDialog.css';

class ImportDialog extends Component {
  onSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit(this.importChordSheetEditor.value);
  };

  render() {
    const { show, onCancel } = this.props;

    if (!show) {
      return null;
    }

    return (
      <section className="ImportDialog">
        <button className="ImportDialog__close-button" onClick={onCancel}>×</button>

        <div className="ImportDialog__contents">
          <h1>Import chord sheet</h1>
          <textarea
            className="ChordSheetEditor"
            ref={importChordSheetEditor => (this.importChordSheetEditor = importChordSheetEditor)}
          />

          <div className="ImportDialog__buttons">
            <button className="large" onClick={this.onSubmit}>Import chord sheet</button>
          </div>
        </div>
      </section>
    );
  }
}

ImportDialog.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ImportDialog;
