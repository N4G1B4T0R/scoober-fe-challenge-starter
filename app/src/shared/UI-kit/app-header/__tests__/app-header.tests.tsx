import React from 'react';
import { render, screen } from "@testing-library/react";
import { AppHeader } from "../app-header";

describe('AppHeader component', () => {
  it("Should render header with login text", () => {
    render(<AppHeader username={undefined} />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("Should render header with test text", () => {
    render(<AppHeader username={'test'} />);
    expect(screen.getByText("Playing with test")).toBeInTheDocument();
  });
})
