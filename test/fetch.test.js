import React from 'react';
import ArticleFetch from '../content/tutorials/ArticleFetch';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ArticleFetch/>).toJSON();
    expect(tree).toMatchSnapshot();
});