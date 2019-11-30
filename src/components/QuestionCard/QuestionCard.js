import React from 'react';

import './QuestionCard.scss';

const QuestionCard = ({ data }) => (
  <div className="question-card" data-test="question-card">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" data-test="card-title">{data.question}</h5>
        <p className="card-text">Published At: {data.published_at}</p>
        <p className="card-text">Total choices: {data.choices && data.choices.length ? data.choices.length : 0}</p>
      </div>
    </div>
  </div>
);

export default QuestionCard;