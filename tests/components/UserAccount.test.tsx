import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

const user: User = { id: 33213213, name: "john doe", isAdmin: true };

describe("UserAccount", () => {
  it("should render edit button if user is admin", () => {
    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render edit button if user is not admin", () => {
    const regularUser = { ...user, isAdmin: false };

    render(<UserAccount user={regularUser} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();

    screen.debug();
  });

  it("should render user name", () => {
    render(<UserAccount user={user} />);

    const userName = screen.getByText(user.name);
    expect(userName).toBeInTheDocument();
  });
});
