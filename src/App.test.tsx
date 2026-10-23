import $ from "react-test";
import { local } from "brownies";
import App from "./App";

const texts = ($app: any) => $app.find("p").array("textContent");

describe("App", () => {
  beforeEach(() => localStorage.clear());

  it("asks for the first item on an empty list", () => {
    const $app = $(<App />);
    expect($app.find('input[name="text"]').attr("placeholder")).toBe("Add the first item");
  });

  it("adds items, clears the field and saves them", async () => {
    const $app = $(<App />);
    await $app.find('input[name="text"]').change("Buy milk");
    await $app.find("form").submit();
    await $app.find('input[name="text"]').change("Call mum");
    await $app.find("form").submit();
    expect(texts($app)).toEqual(["Buy milk", "Call mum"]);
    expect($app.find('input[name="text"]')).toHaveValue("");
    expect(local.items.map((it: any) => it.text)).toEqual(["Buy milk", "Call mum"]);
  });

  it("ticks an item and removes another", async () => {
    local.items = [{ id: 1, text: "Buy milk" }, { id: 2, text: "Call mum" }];
    const $app = $(<App />);
    await $app.find("button").contains(/^Buy milk$/).click();
    expect(local.items[0].done).toBe(true);
    await $app.find("button").contains(/^Call mum$/).siblings("button").click();
    expect(texts($app)).toEqual(["Buy milk"]);
    expect(local.items).toHaveLength(1);
  });
});
