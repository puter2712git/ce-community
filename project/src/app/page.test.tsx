/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './page';

it('App Router: ', () => {
  render(<Home />);
  expect(screen.getByRole('heading')).toHaveTextContent('test');
});
