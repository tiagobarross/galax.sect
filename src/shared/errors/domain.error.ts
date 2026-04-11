export abstract class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class InvalidUrlError extends DomainError {
  constructor(url: string) {
    super(`Invalid URL: ${url}`);
  }
}

export class InvalidScoreError extends DomainError {
  constructor(score: number) {
    super(`Invalid score: ${score}. Score must be between 0 and 100`);
  }
}

export class InvalidSeverityError extends DomainError {
  constructor(severity: string) {
    super(`Invalid severity: ${severity}`);
  }
}

export class InvalidScanIdError extends DomainError {
  constructor(id: string) {
    super(`Invalid scan ID: ${id}`);
  }
}
