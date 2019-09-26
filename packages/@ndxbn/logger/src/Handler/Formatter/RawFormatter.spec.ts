import { RawFormatter } from "./RawFormatter";

test("RawFormatter should return message as is.", () => {
  expect(new RawFormatter().format("foo bar; baz")).toBe("foo bar; baz");
});
