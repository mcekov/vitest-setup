import { http, HttpResponse as response } from "msw";

import { data } from "./data";

export const handlers = [
  http.get("/categories", () => {
    return response.json([...data]);
  }),

  http.get("/products", () => {
    return response.json([...data]);
  }),

  http.get("/products/:id", ({ params }) => {
    const id = parseInt(params.id as string);
    const product = data.find((product) => product.id === id);
    return response.json(product);
  }),
];
