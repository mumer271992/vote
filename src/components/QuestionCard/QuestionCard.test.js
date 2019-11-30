import React from 'react';
import { mount } from 'enzyme';

import QuestionCard from './QuestionCard';

const mockedQuestionData = {
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
};

describe('Question Card component test', () => {
  let enzymeWrapper;
  beforeEach(() => {
    enzymeWrapper = mount(<QuestionCard data={mockedQuestionData} />);
  })

  it('should mount successfully', () => {
    expect(enzymeWrapper.length).toEqual(1);
  });
  it('should render title properly', () => {
    const titleWrapper = enzymeWrapper.find('[data-test="card-title"]').at(0);
    expect(titleWrapper.length).toEqual(1);
  });
});