import React from 'react';
import { shallow, mount } from 'enzyme';
import ApiProvider from '../../providers/ApiProvider';
import QuestionDetailsPage from './QuestionDetailsPage';

describe('Question Details Page component test', () => {
  let enzymeWrapper;
  beforeEach(() => {
    const jsx = (
      <ApiProvider baseURL="/questions">
        <QuestionDetailsPage />
      </ApiProvider>
    );
    enzymeWrapper = shallow(jsx);
  })

  it('should shallow mount successfully', () => {
    expect(enzymeWrapper.length).toEqual(1);
  });
});