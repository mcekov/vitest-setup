import { http, HttpResponse as res } from "msw";

export const handlers = [
  http.get("/categories", () => {
    return res.json([
      { id: 1, name: "Books" },
      { id: 2, name: "Electronics" },
      { id: 3, name: "Home" },
      { id: 4, name: "Toys" },
    ]);
  }),

  http.get("/products", () => {
    return res.json([
      {
        id: 1,
        name: "Book",
        price: 10,
        categoryId: 1,
      },
      {
        id: 2,
        name: "Phone",
        price: 500,
        categoryId: 2,
      },
      {
        id: 3,
        name: "Table",
        price: 150,
        categoryId: 3,
      },
      {
        id: 4,
        name: "Toy",
        price: 20,
        categoryId: 4,
      },
    ]);
  }),
];
