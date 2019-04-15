import React from 'react';
import LearnScreen from '../views/LearnScreen';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<LearnScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});