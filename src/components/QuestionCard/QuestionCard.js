import React from 'react';
import { Link } from 'react-router-dom';

import './QuestionCard.scss';

const QuestionCard = ({ data }) => (
  <div className="question-card" data-test="question-card">
    <Link to={`/questions/${data.url.split('/').pop()}`}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" data-test="card-title">{data.question}</h5>
          <p className="card-text">Published At: {data.published_at}</p>
          <p className="card-text">Total choices: {data.choices && data.choices.length ? data.choices.length : 0}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default QuestionCard;