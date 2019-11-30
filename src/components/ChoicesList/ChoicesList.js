import React from 'react';

import './ChoicesList.scss';

class ChoicesList extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    console.log(e.target);
    console.log(e.target.id);
  }

  render() {
    const { list } = this.props;
    return (
      <div className="choices-list">
        <div className="choices-list-item">
          <div></div>
          <div>Choice</div>
          <div>Votes</div>
        </div>
        {
          list && list.map((item, index) => (
            <div className="choices-list-item" key={index}>
              <div><input type="radio" name="choice" id={index} value={item.choice} onChange={this.changeHandler}></input></div>
              <div>{item.choice}</div>
              <div>{item.votes}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ChoicesList;