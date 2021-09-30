import React from 'react';
import './FeedbackOptions.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Btn-Box">
      {options.map(({ name, title }) => (
        <button
          type="button"
          name={name}
          onClick={onLeaveFeedback}
          className="Btn"
        >
          {title}
        </button>
      ))}
      {/* <button
        type="button"
        name="good"
        onClick={onLeaveFeedback}
        className="Btn"
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
        className="Btn"
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
        className="Btn"
      >
        Bad
      </button> */}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
