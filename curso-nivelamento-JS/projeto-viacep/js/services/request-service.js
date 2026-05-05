import RequestExceptions from './exceptions/request-exceptions.js';

export async function getJson(url) {

  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  } catch (error) {
    throw new RequestExceptions('Erro ao fazer a requisição: ' + error.message);
  }
}
