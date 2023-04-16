import { describe, expect, it } from "vitest";
import Contact from "../src/Containers/Contact/Contact";
import { render, screen } from "@testing-library/react";

describe("Contact section", () => {
  it("Should render the links", () => {
    render(<Contact />);
    expect(screen.getByText(/LinkedIn: Leo-Westebbe/i)).toBeDefined();
    expect(screen.getByText(/GitHub: LWest001/i)).toBeDefined();
    expect(screen.getByText(/leo.westebbe@gmail.com/i)).toBeDefined();
  });

  it("Should render the form", () => {
    render(<Contact />);
    expect(screen.getByRole("form", { name: /send me a message/i }))
      .toBeDefined;
  });
});
