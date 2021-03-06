/**
 * key names SHOULD be composed only of the characters `A-Z`, `a-z`, `0-9`, underscore `_`, and period `.` .
 */
export class Context extends Map<string, () => string> {
  /**
   * @param another
   * @return もし同値ならば True、差分があれば False
   */
  public equals(another: Context): boolean {
    if (this.size !== another.size) {
      return false;
    }

    for (const key of another.keys()) {
      //
      if (!this.has(key)) {
        return false;
      }

      // Map.get() returns Optional value, but if value is undefined, something is wrong.
      const selfValue = this.get(key);
      const targetValue = another.get(key);
      if (selfValue === undefined || targetValue === undefined) {
        throw new Error(
          "Logic Exception: context should not include undefined value."
        );
      }

      //
      if (selfValue() !== targetValue()) {
        return false;
      }
    }

    return true;
  }
}
