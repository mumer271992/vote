import React from 'react';
import PropTypes from 'prop-types';

import QuestionCard from '../QuestionCard/QuestionCard';
import './QuestionsList.scss'

const QuestionsList = ({ list }) => {
  return (
    <div className="questions-list">
      {
        list && list.map((question, index) => {
            return (<QuestionCard key={index} data={question}/>)
          })
      }
    </div>
  );
}

QuestionsList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default QuestionsList;