import http from './interceptor';

export default async function call (requestType, url, data = null) {
  return http[requestType](url, data)
}