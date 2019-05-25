import NoopFormatter from "./NoopFormatter";

test("NoopFormatter should return message as is.", () => {
  expect((new NoopFormatter()).format("foo bar; baz")).toBe("foo bar; baz");
});
