export default class UserVisibleError extends Error {
  static isUserVisibleError(value: unknown): value is UserVisibleError {
    return value instanceof UserVisibleError;
  }
}
