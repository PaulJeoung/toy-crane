class RequestParameterError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestParameterError';
    this.status = 400;
  }
}

module.exports = {
  RequestParameterError
};
