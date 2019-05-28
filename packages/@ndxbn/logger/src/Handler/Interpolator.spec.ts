import Interpolator from "./Interpolator";

const context = new Map<string, string>([["foo", "FOOBAR"]]);

test("should replace placeholders with context values", () => {
  expect(Interpolator.interpolate("{foo}", context)).toBe("FOOBAR");
  expect(Interpolator.interpolate("{{foo}}", context)).toBe("{FOOBAR}");

  expect(Interpolator.interpolate("{foo}{bar}", context)).toBe("FOOBAR{bar}");
});

test("placeholder cannot contain white space", () => {
  expect(Interpolator.interpolate("{ foo}", context)).toBe("{ foo}");
  expect(Interpolator.interpolate("{foo }", context)).toBe("{foo }");
  expect(Interpolator.interpolate("{ foo }", context)).toBe("{ foo }");
});
