import React from 'react';

import QuestionsList from '../../components/QuestionsList/QuestionsList';
import './QuestionsPage.scss';

class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
          {
            "question": "Favourite hot beverage?",
            "published_at": "2015-05-27T21:22:26.648000+00:00",
            "url": "/questions/9",
            "choices": [
              {
                "choice": "Apple Cider",
                "votes": 7,
                "url": "/questions/9/choices/67"
              },
              {
                "choice": "Coffee",
                "votes": 4,
                "url": "/questions/9/choices/66"
              },
              {
                "choice": "Hot Chocolate",
                "votes": 2,
                "url": "/questions/9/choices/68"
              },
              {
                "choice": "Tea",
                "votes": 1,
                "url": "/questions/9/choices/65"
              }
            ]
          },
          {
              "question": "Transport of choice?",
              "published_at": "2015-05-27T21:22:26.619000+00:00",
              "url": "/questions/8",
              "choices": [
                  {
                      "choice": "🚈",
                      "votes": 4,
                      "url": "/questions/8/choices/61"
                  },
                  {
                      "choice": "🚀",
                      "votes": 2,
                      "url": "/questions/8/choices/58"
                  },
                  {
                      "choice": "🚁",
                      "votes": 1,
                      "url": "/questions/8/choices/57"
                  },
                  {
                      "choice": "🚃",
                      "votes": 0,
                      "url": "/questions/8/choices/62"
                  },
                  {
                      "choice": "🚎",
                      "votes": 0,
                      "url": "/questions/8/choices/60"
                  },
                  {
                      "choice": "🚗",
                      "votes": 0,
                      "url": "/questions/8/choices/59"
                  },
                  {
                      "choice": "🚠",
                      "votes": 0,
                      "url": "/questions/8/choices/64"
                  },
                  {
                      "choice": "⛵️",
                      "votes": 0,
                      "url": "/questions/8/choices/63"
                  },
                  {
                      "choice": "✈️",
                      "votes": 0,
                      "url": "/questions/8/choices/56"
                  }
              ]
          },
          {
              "question": "Bacon?",
              "published_at": "2015-05-27T21:22:26.601000+00:00",
              "url": "/questions/7",
              "choices": [
                  {
                      "choice": "🇬🇧",
                      "votes": 3,
                      "url": "/questions/7/choices/53"
                  },
                  {
                      "choice": "🇺🇸",
                      "votes": 2,
                      "url": "/questions/7/choices/54"
                  },
                  {
                      "choice": "🇨🇦",
                      "votes": 0,
                      "url": "/questions/7/choices/55"
                  }
              ]
          },
          {
            "question": "Bacon?",
            "published_at": "2015-05-27T21:22:26.601000+00:00",
            "url": "/questions/7",
            "choices": [
                {
                    "choice": "🇬🇧",
                    "votes": 3,
                    "url": "/questions/7/choices/53"
                },
                {
                    "choice": "🇺🇸",
                    "votes": 2,
                    "url": "/questions/7/choices/54"
                },
                {
                    "choice": "🇨🇦",
                    "votes": 0,
                    "url": "/questions/7/choices/55"
                }
            ]
        },
        {
          "question": "Bacon?",
          "published_at": "2015-05-27T21:22:26.601000+00:00",
          "url": "/questions/7",
          "choices": [
              {
                  "choice": "🇬🇧",
                  "votes": 3,
                  "url": "/questions/7/choices/53"
              },
              {
                  "choice": "🇺🇸",
                  "votes": 2,
                  "url": "/questions/7/choices/54"
              },
              {
                  "choice": "🇨🇦",
                  "votes": 0,
                  "url": "/questions/7/choices/55"
              }
          ]
      },
      ]
    }
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

export default QuestionsPage;