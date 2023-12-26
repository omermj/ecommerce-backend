"use strict";

/** Main Error */
class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

/** 404 Error */
class NotFoundError extends ExpressError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

/** 400 Bad Request Error */
class BadRequestError extends ExpressError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}

/** 401 Unauthorized Request Error */
class UnauthorizedError extends ExpressError {
  constructor(message = "Unauthorized Request") {
    super(message, 401);
  }
}

export { ExpressError, NotFoundError, BadRequestError, UnauthorizedError };
