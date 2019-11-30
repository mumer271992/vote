import React from 'react';
import { mount } from 'enzyme';

import ChoicesList from './ChoicesList';

const mockedChoicesLisst = [
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
];

describe('Choices List component test', () => {
  let enzymeWrapper; let spy = null;
  beforeEach(() => {
    spy = jest.spyOn(ChoicesList.prototype, 'changeHandler').mockImplementation(jest.fn());
    enzymeWrapper = mount(<ChoicesList list={mockedChoicesLisst} />);
  })

  it('should mount successfully', () => {
    expect(enzymeWrapper.length).toEqual(1);
  });
  it('should render title properly', () => {
    const choicesWrapper = enzymeWrapper.find('[data-test="choices-list-item"]');
    expect(choicesWrapper.length).toEqual(mockedChoicesLisst.length + 1);
  });
  it('should call change handler on choice selection', () => {
    const choicesSelectorWrapper = enzymeWrapper.find('[data-test="choices-list-item"] input').at(0);
    choicesSelectorWrapper.simulate('change');
    expect(spy).toHaveBeenCalled();
  });
});