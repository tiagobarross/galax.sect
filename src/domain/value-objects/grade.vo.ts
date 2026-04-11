import { Score } from './score.vo';

export type GradeType = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';

export class Grade {
  private static readonly GRADE_THRESHOLDS: Record<GradeType, number> = {
    'A+': 95,
    A: 85,
    B: 70,
    C: 50,
    D: 30,
    F: 0,
  };

  private constructor(private readonly value: GradeType) {}

  static fromScore(score: Score): Grade {
    const scoreValue = score.getValue();

    if (scoreValue >= Grade.GRADE_THRESHOLDS['A+']) {
      return new Grade('A+');
    }
    if (scoreValue >= Grade.GRADE_THRESHOLDS.A) {
      return new Grade('A');
    }
    if (scoreValue >= Grade.GRADE_THRESHOLDS.B) {
      return new Grade('B');
    }
    if (scoreValue >= Grade.GRADE_THRESHOLDS.C) {
      return new Grade('C');
    }
    if (scoreValue >= Grade.GRADE_THRESHOLDS.D) {
      return new Grade('D');
    }
    return new Grade('F');
  }

  getValue(): GradeType {
    return this.value;
  }

  isExcellent(): boolean {
    return this.value === 'A+' || this.value === 'A';
  }

  isGood(): boolean {
    return this.value === 'B';
  }

  isAverage(): boolean {
    return this.value === 'C';
  }

  isPoor(): boolean {
    return this.value === 'D' || this.value === 'F';
  }

  equals(other: Grade): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
