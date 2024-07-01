import { http, HttpResponse as response } from "msw";

import { data } from "../../src/constants/index";

export const handlers = [
  http.get("/categories", () => {
    return response.json([...data]);
  }),

  http.get("/products", () => {
    return response.json([...data]);
  }),
];
