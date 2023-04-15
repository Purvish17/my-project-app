import { render, screen } from '@testing-library/react';

import Price from './Price';

it("should check about price title is present", () => {
    render(<Price/>);
    const Pricetitle = screen.getByTestId('price-title');
    //expect(linkElement).toBeInTheDocument();
    expect(Pricetitle).not.toBeNull();
  });

