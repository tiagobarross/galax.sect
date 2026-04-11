import { Guard } from '@/shared/utils/guard.util';
import { InvalidScoreError } from '@/shared/errors/domain.error';

export class Score {
  private static readonly MIN_SCORE = 0;
  private static readonly MAX_SCORE = 100;

  private constructor(private readonly value: number) {
    Guard.againstNullOrUndefined(value, 'score');
    this.validate(value);
  }

  static create(value: number): Score {
    return new Score(value);
  }

  static fromVulnerabilities(totalPenalty: number): Score {
    const calculatedScore = Math.max(
      Score.MIN_SCORE,
      Math.min(Score.MAX_SCORE, Score.MAX_SCORE - totalPenalty)
    );
    return new Score(calculatedScore);
  }

  static perfect(): Score {
    return new Score(Score.MAX_SCORE);
  }

  static zero(): Score {
    return new Score(Score.MIN_SCORE);
  }

  private validate(value: number): void {
    Guard.againstInvalidRange(
      value,
      Score.MIN_SCORE,
      Score.MAX_SCORE,
      'score'
    );
  }

  getValue(): number {
    return this.value;
  }

  isPerfect(): boolean {
    return this.value === Score.MAX_SCORE;
  }

  isZero(): boolean {
    return this.value === Score.MIN_SCORE;
  }

  isAbove(threshold: number): boolean {
    return this.value > threshold;
  }

  isBelow(threshold: number): boolean {
    return this.value < threshold;
  }

  equals(other: Score): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
