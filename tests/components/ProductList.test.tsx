import { render, screen } from "@testing-library/react";
import ProductList from "../../src/components/ProductList";
import { http, HttpResponse as res } from "msw";
import { server } from "../mocks/server";

describe("ProductList", () => {
  it("should render a list of products", async () => {
    render(<ProductList />);
    const products = await screen.findAllByRole("listitem");

    expect(products.length).toBeGreaterThan(0);
  });

  it("should render no products available if there is no products", async () => {
    server.use(http.get("/products", () => res.json([])));
    render(<ProductList />);

    const message = await screen.findByText(/no products/i);
    expect(message).toBeInTheDocument();
  });
});
