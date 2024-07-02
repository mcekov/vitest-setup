import { render, screen } from "@testing-library/react";
import { http, HttpResponse as response } from "msw";

import ProductDetail from "../../src/components/ProductDetail";
import { data } from "../mocks/data";
import { server } from "../mocks/server";

describe("ProductDetail", () => {
  it("should render product details", async () => {
    render(<ProductDetail productId={1} />);

    expect(
      await screen.findByText(new RegExp(data[0].name))
    ).toBeInTheDocument();

    expect(
      await screen.findByText(new RegExp(data[0].price.toString()))
    ).toBeInTheDocument();
  });

  it("should render product not found", async () => {
    server.use(http.get("/products/:1", () => response.json(null)));
    render(<ProductDetail productId={1} />);

    const message = await screen.findByText(/not found/i);

    expect(message).toBeInTheDocument();
  });

  it("should render error for invalid productId", async () => {
    server.use(http.get("/products/:1", () => response.json(null)));
    render(<ProductDetail productId={0} />);

    const message = await screen.findByText(/invalid/i);

    expect(message).toBeInTheDocument();
  });
});
