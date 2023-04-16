import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactMeForm from "../src/Containers/Contact/ContactMeForm";

// setup userEvent
function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe("Contact form", () => {
  const mockSendEmail = vi.fn();
  it("Should render the fields", () => {
    render(<ContactMeForm sendEmail={mockSendEmail} />);
    expect(screen.getByRole("textbox", { name: /first name/i })).toBeDefined;
    expect(screen.getByRole("textbox", { name: /last name/i })).toBeDefined;
    expect(screen.getByRole("textbox", { name: /email/i })).toBeDefined;
    expect(screen.getByRole("textbox", { name: /subject/i })).toBeDefined;
    expect(screen.getByRole("textbox", { name: /message/i })).toBeDefined;
  });

  it("Should render the button", () => {
    render(<ContactMeForm sendEmail={mockSendEmail} />);
    expect(screen.getByRole("button", { name: /send message/i })).toBeDefined;
  });
});

describe("Submitting the form", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const mockSendEmail = vi.fn();

  it("Should submit form and display thank you message on submission", async () => {
    const user = userEvent.setup();
    render(<ContactMeForm sendEmail={mockSendEmail} />);
    const [firstName, lastName, email, subject, message] = screen.getAllByRole(
      "textbox"
    );
    const button = screen.getByRole("button", { name: /Send message/i });

    await user.type(firstName, "John");
    await user.type(lastName, "Doe");
    await user.type(email, "JohnDoe@aol.com");
    await user.type(subject, "Wazzup");
    await user.type(message, "Test");
    await user.click(button);
    expect(mockSendEmail).toBeCalled();
    setTimeout(
      () =>
        expect(screen.getByText("Thank you for getting in touch")).toBeDefined,
      1000
    );
  });

  it("should call sendEmail", async () => {
    const user = userEvent.setup();
    render(<ContactMeForm sendEmail={mockSendEmail} />);

    const [firstName, lastName, email, subject, message] = screen.getAllByRole(
      "textbox"
    );
    const button = screen.getByRole("button", { name: /Send message/i });

    await user.type(firstName, "John");
    await user.type(lastName, "Doe");
    await user.type(email, "JohnDoe@aol.com");
    await user.type(subject, "Wazzup");
    await user.type(message, "Test");
    await user.click(button);
    setTimeout(() => expect(mockSendEmail).toBeCalled(), 1000);
  });
});
