import { render, screen } from "@testing-library/react";

import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  it("should render with correct text and initial state", () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading");
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    /* expect(button).toHaveTextContent(/submit/i); */
  });

  it("should enable the button when the checkbox is checked", async () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    const button = screen.getByRole("button");

    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
});
