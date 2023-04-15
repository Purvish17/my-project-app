import { render, screen } from '@testing-library/react';

import Home from './Home';

it(" home page title should be present in home component", () => {
  render(<Home />);
  const hometitle = screen.getByText("home-title");
  expect(hometitle).toBeInTheDocument();
});
