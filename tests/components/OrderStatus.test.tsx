import { render, screen } from "@testing-library/react";
import { Theme } from "@radix-ui/themes";
import OrderStatus from "../../src/components/OrderStatusSelector";
import userEvent from "@testing-library/user-event";

describe("OrderStatusSelector", () => {
  it("should render New as the default value", () => {
    render(
      <Theme>
        <OrderStatus onChange={console.log} />
      </Theme>
    );

    const button = screen.getByRole("combobox");
    expect(button).toHaveTextContent(/new/i);
  });

  it("should render correct statuses", async () => {
    render(
      <Theme>
        <OrderStatus onChange={console.log} />
      </Theme>
    );

    const button = screen.getByRole("combobox");
    const user = userEvent.setup();
    await user.click(button);

    const options = await screen.findAllByRole("option");
    expect(options).toHaveLength(3);

    const labels = options.map((option) => option.textContent);
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });
});
