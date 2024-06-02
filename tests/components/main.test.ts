import { render, screen } from "@testing-library/react";

describe("group", () => {
  it("should", async () => {
    const res = await fetch("/categories");
    const data = await res.json();

    console.log(data);
    expect(data).toHaveLength(4);
  });
});
