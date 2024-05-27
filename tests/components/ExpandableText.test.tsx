import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const longText = "a".repeat(limit + 1);
  const truncatedText = `${longText.slice(0, limit)}...`;

  it("shoud render the full text if less than 255 characters", () => {
    const text = "Short text.";
    render(<ExpandableText text={text} />);

    const shortText = screen.getByText(text);
    expect(shortText).toBeInTheDocument();
  });

  it("shoud render truncate text if longer than 255 characters", () => {
    render(<ExpandableText text={longText} />);
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });

  it("shoud expand text when Show More button is clicked", async () => {
    render(<ExpandableText text={longText} />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    expect(screen.queryByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it("shoud colapse text when Show Less button is clicked", async () => {
    render(<ExpandableText text={longText} />);
    const showMoreBtn = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreBtn);

    const showLessBtn = screen.getByRole("button", { name: /less/i });
    await user.click(showLessBtn);

    expect(screen.queryByText(truncatedText)).toBeInTheDocument();
    expect(showMoreBtn).toHaveTextContent(/more/i);
  });
});
