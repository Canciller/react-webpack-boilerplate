import React from 'react';

import { render } from '@testing-library/react';

import HelloWorld from './HelloWorld';

test('HelloWorld', () => {
  const { findByText } = render(<HelloWorld />);

  expect(findByText('Hello, World!')).toBeTruthy();
});
