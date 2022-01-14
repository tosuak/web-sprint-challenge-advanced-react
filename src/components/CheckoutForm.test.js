import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {});
  render(<CheckoutForm />);
test("shows success message on submit with form details", () => {});
  render(<CheckoutForm />);
  const message = screen.getByLabelText(/Message/i);

  userEvent.type(message, 'message');

  const button = screen.getByRole('button');
  userEvent.click(button);

  await waitFor(() => {
    const messageDisplay = screen.queryByTestId(/message/i);
    expect(messageDisplay).toBeInTheDocument();
  })

