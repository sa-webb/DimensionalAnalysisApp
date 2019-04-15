import React from 'react';
import GuideScreen from '../views/GuideScreen';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<GuideScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});