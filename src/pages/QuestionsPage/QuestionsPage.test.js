import React from 'react';
import { mount } from 'enzyme';

import QuestionsPage from './QuestionsPage';

describe('Questions Page component test', () => {
  let enzymeWrapper;
  beforeEach(() => {
    enzymeWrapper = mount(<QuestionsPage />);
  })

  it('should mount successfully', () => {
    expect(enzymeWrapper.length).toEqual(1);
  });
  // it('should render title properly', () => {
  //   const titleWrapper = enzymeWrapper.find('[data-test="question-card"]');
  //   expect(titleWrapper.length).toEqual(mockedQuestionData.length);
  // });
});