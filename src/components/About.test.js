import { render, screen } from '@testing-library/react';
import About from './About';

it("should check about title is present", () => {
    render(<About />);
    const loginHeader = screen.getByTestId('about-title');
    //expect(linkElement).toBeInTheDocument();
    expect(loginHeader).not.toBeNull();
  });

