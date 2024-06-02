import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/categories", (req, res, ctx) => {
    return HttpResponse.json([
      { id: 1, name: "Books" },
      { id: 2, name: "Electronics" },
      { id: 3, name: "Home" },
      { id: 4, name: "Toys" },
    ]);
  }),
];
