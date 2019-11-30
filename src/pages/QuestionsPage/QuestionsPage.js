import React from 'react';
import PropTypes from 'prop-types';

import QuestionsList from '../../components/QuestionsList/QuestionsList';
import './QuestionsPage.scss';
import { withApiProvider } from '../../providers/ApiProvider';
import Loader from '../../components/Loader/Loader';

class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      loading: false,
    }
  }
  componentDidMount() {
    const { api, baseURL } = this.props;
    this.setState(() => ({ loading: true }));
    api.get(baseURL).then((response) => {
      this.setState(() => ({ loading: false, questions: response.data }));
    });
  }

  render () {
    const { questions, loading } = this.state;
    return (
      <div className="questions-page container">
        <h1>Questions List</h1>
        <div className="questions-list">
          <QuestionsList list={questions} />
        </div>
        {
          loading && (<Loader />)
        }
      </div>
    );
  }
}

QuestionsPage.propTypes = {
  api: PropTypes.func,
}

export default withApiProvider(QuestionsPage);