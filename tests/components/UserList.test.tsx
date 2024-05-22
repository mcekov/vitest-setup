import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should not render list of users when the users list is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render list of users", () => {
    const users: User[] = [
      {
        id: 42,
        name: "John Locke",
      },
      {
        id: 43,
        name: "Jack Shephard",
      },
      {
        id: 44,
        name: "Kate Austen",
      },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
