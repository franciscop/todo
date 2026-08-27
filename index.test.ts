import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");

test("the page declares what it needs", () => {
  expect(html).toInclude("<title>");
  expect(html).toMatch(/rel="[^"]*icon"/);
  expect(html).toInclude('<div id="root">');
  expect(html).toMatch(/src="\/src\/main\.tsx"/);
});
