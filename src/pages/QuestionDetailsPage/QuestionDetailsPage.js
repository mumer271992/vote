import React from 'react';

import { withApiProvider } from '../../providers/ApiProvider';
import ChoicesList from '../../components/ChoicesList/ChoicesList';

class QuestionDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionDetails: {},
    }
  }

  componentDidMount() {
    const { match: { params }, api } = this.props;
    api.get(params.question_id).then((response) => {
      console.log("Question Details");
      console.log(response.data);
      this.setState(() => ({ questionDetails: response.data }));
    });
  }
  render() {
    const { questionDetails } = this.state;
    return (
      <div className="question-details container">
        <h1>Questions Details</h1>
        <h2>{ questionDetails.question }</h2>
        <ChoicesList list={questionDetails.choices} />
      </div>
    );
  }
}

export default withApiProvider(QuestionDetailsPage);