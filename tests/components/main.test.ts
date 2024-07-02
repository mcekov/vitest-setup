import { it, expect, describe } from "vitest";
import { db } from "../mocks/db";

describe("group", () => {
  it("should show something", async () => {
    const product = db.product.create({
      name: "Banana",
    });

    console.log(product);
  });
});
