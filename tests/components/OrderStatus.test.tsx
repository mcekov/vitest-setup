import { render, screen } from "@testing-library/react";
import { Theme } from "@radix-ui/themes";
import OrderStatus from "../../src/components/OrderStatusSelector";
import userEvent from "@testing-library/user-event";

describe("OrderStatusSelector", () => {
  const renderOrderStatusSelector = () => {
    const onChange = vi.fn();
    render(
      <Theme>
        <OrderStatus onChange={onChange} />
      </Theme>
    );

    return {
      trigger: screen.getByRole("combobox"),
      onChange,
      user: userEvent.setup(),
      getOptions: async () => await screen.findAllByRole("option"),
    };
  };

  it("should render New as the default value", () => {
    const { trigger } = renderOrderStatusSelector();
    expect(trigger).toHaveTextContent(/new/i);
  });

  it("should render correct statuses", async () => {
    const { trigger, user, getOptions } = renderOrderStatusSelector();

    await user.click(trigger);

    const options = await getOptions();
    expect(options).toHaveLength(3);
    const labels = options.map((option) => option.textContent);
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });
});
