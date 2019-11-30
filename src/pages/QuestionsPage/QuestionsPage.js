import React from 'react';
import PropTypes from 'prop-types';

import QuestionsList from '../../components/QuestionsList/QuestionsList';
import './QuestionsPage.scss';
import { withApiProvider } from '../../providers/ApiProvider';

class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    }
  }
  componentDidMount() {
    const { api } = this.props;
    api.get('').then((response) => {
      this.setState(() => ({ questions: response.data }));
    });
  }

  render () {
    const { questions } = this.state;
    return (
      <div className="questions-page container">
        <h1>Questions List</h1>
        <div className="questions-list">
          <QuestionsList list={questions} />
        </div>
      </div>
    );
  }
}

QuestionsPage.propTypes = {
  api: PropTypes.func,
}

export default withApiProvider(QuestionsPage);