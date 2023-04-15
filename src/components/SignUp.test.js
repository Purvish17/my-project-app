import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';
// npm test SignUp.test.js -- --coverage --watchAll=false
it("should check about SignUp title is present", () => {
    render(<SignUp/>);
    const Signup = screen.getByTestId('price-title');
    //expect(linkElement).toBeInTheDocument();
    expect(Signup).not.toBeNull();
  });
