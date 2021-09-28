import React from 'react';
import './FeedbackOptions.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ addFeedback }) => {
  return (
    <div className="Btn-Box">
      <button type="button" name="good" onClick={addFeedback} className="Btn">
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={addFeedback}
        className="Btn"
      >
        Neutral
      </button>
      <button type="button" name="bad" onClick={addFeedback} className="Btn">
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
