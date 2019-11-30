import React from 'react';
import axios from 'axios';

import { withApiProvider } from '../../providers/ApiProvider';
import ChoicesList from '../../components/ChoicesList/ChoicesList';
import './QuestionDetailsPage.scss';

class QuestionDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionDetails: {},
      selectedChoice: null,
    }
    this.OnSelect = this.OnSelect.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    const { match: { params }, api, baseURL } = this.props;
    api.get(`${baseURL}/${params.question_id}`).then((response) => {
      console.log("Question Details");
      console.log(response.data);
      this.setState(() => ({ questionDetails: response.data }));
    });
  }

  OnSelect(selectedIndex) {
    const { questionDetails } = this.state;
    const selectedChoice = questionDetails.choices[selectedIndex];
    console.log("Selected: ", selectedChoice);
    this.setState(() => ({ selectedChoice: selectedChoice }));
  }

  onClickHandler() {
    const { api, history } = this.props;
    const { selectedChoice } = this.state;
    console.log(selectedChoice.url);
    api.post(selectedChoice.url).then((res) => {
      history.push('/');
    })
  }

  render() {
    const { questionDetails, selectedChoice } = this.state;
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
      </div>
    );
  }
}

export default withApiProvider(QuestionDetailsPage);