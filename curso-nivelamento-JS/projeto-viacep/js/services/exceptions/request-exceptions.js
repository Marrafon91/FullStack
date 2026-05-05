export default function RequestExceptions(message) {
  const error = new Error(message);
  return error;
}

RequestExceptions.prototype = Object.create(Error.prototype);
