import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { withApiProvider } from '../../providers/ApiProvider';
import ChoicesList from '../../components/ChoicesList/ChoicesList';
import './QuestionDetailsPage.scss';
import Loader from '../../components/Loader/Loader';

class QuestionDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionDetails: {},
      selectedChoice: null,
      loading: false,
    }
    this.OnSelect = this.OnSelect.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    const { match: { params }, api, baseURL } = this.props;
    this.setState(() => ({ loading: true }));
    api.get(`${baseURL}/${params.question_id}`).then((response) => {
      this.setState(() => ({ loading: false, questionDetails: response.data }));
    });
  }

  OnSelect(selectedIndex) {
    const { questionDetails } = this.state;
    const selectedChoice = questionDetails.choices[selectedIndex];
    this.setState(() => ({ selectedChoice: selectedChoice }));
  }

  onClickHandler() {
    const { api, history } = this.props;
    const { selectedChoice } = this.state;
    api.post(selectedChoice.url).then((res) => {
      history.push('/');
    })
  }

  render() {
    const { questionDetails, selectedChoice, loading } = this.state;
    return (
      <div className="question-details container">
        <h1>Questions Details</h1>
        <h2>{ questionDetails.question }</h2>
        <ChoicesList list={questionDetails.choices} onSelect={this.OnSelect}/>
        {
          selectedChoice && (
            <div className="actions">
              <button className="btn btn-primary" onClick={this.onClickHandler}>Save</button>
            </div>
          )
        }
        {
          loading && (<Loader />)
        }
      </div>
    );
  }
}

QuestionDetailsPage.propTypes = {
  api: PropTypes.func.isRequired,
  baseURL: PropTypes.string.isRequired,
}

export default withApiProvider(QuestionDetailsPage);