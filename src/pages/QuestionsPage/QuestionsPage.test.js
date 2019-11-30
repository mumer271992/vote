import React from 'react';
import { shallow, mount } from 'enzyme';
import ApiProvider from '../../providers/ApiProvider';
import QuestionsPage from './QuestionsPage';

describe('Questions Page component test', () => {
  let enzymeWrapper;
  beforeEach(() => {
    const jsx = (
      <ApiProvider baseURL="/questions">
        <QuestionsPage />
      </ApiProvider>
    );
    enzymeWrapper = shallow(jsx);
  })

  it('should shallow mount successfully', () => {
    expect(enzymeWrapper.length).toEqual(1);
  });
});