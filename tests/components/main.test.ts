import { it, expect, describe } from "vitest";

describe("group", () => {
  it("should log some data", async () => {
    const response = await fetch("/categories");
    const data = await response.json();

    console.log(data);
    expect(data).toHaveLength(4);
  });
});
