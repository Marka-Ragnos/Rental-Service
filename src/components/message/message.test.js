import React from 'react';
import renderer from 'react-test-renderer';
import Message from './message';


describe(`Should Message render correctly`, () => {
  it(`Should Message render correctly with text`, () => {
    const tree = renderer
      .create(
          <Message
            text={`Text`}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
