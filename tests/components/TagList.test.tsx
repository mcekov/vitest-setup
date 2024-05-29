import { render, screen, waitFor } from "@testing-library/react";

import TagList from "../../src/components/TagList";

describe("TagList", () => {
  it("should render a list of tags", async () => {
    render(<TagList />);

    /* await waitFor(() => {
      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toBeGreaterThan(0);
    }); */

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });
});
