import React from 'react';
import { mount } from 'enzyme';

import QuestionsPage from './QuestionsPage';
import { JestEnvironment } from '@jest/environment';
const apiInstance = {
  get: jest.fn(),
}
describe('Questions Page component test', () => {
  let enzymeWrapper;
  beforeEach(() => {
    enzymeWrapper = mount(<QuestionsPage />);
  })

  it('should mount successfully', () => {
    expect(enzymeWrapper.length).toEqual(1);
  });
});