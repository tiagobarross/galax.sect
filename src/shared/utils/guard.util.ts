export class Guard {
  static againstNullOrUndefined(value: unknown, argumentName: string): boolean {
    if (value === null || value === undefined) {
      throw new Error(`${argumentName} cannot be null or undefined`);
    }
    return true;
  }

  static againstEmptyString(value: string, argumentName: string): boolean {
    if (value.trim().length === 0) {
      throw new Error(`${argumentName} cannot be empty`);
    }
    return true;
  }

  static againstNegativeNumber(value: number, argumentName: string): boolean {
    if (value < 0) {
      throw new Error(`${argumentName} cannot be negative`);
    }
    return true;
  }

  static againstInvalidRange(
    value: number,
    min: number,
    max: number,
    argumentName: string
  ): boolean {
    if (value < min || value > max) {
      throw new Error(`${argumentName} must be between ${min} and ${max}`);
    }
    return true;
  }

  static combine(guards: boolean[]): boolean {
    return guards.every((guard) => guard === true);
  }
}
