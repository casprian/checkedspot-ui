import instances from './interceptor'

export async function callWithoutToken (requestType, url, data = null) {
  return instances.http[requestType](url, data)
}

export async function callWithToken (requestType, url, data = null) {
  return instances.instanceWithToken[requestType](url, data)
}

export async function callWithTokenForMultiPart (requestType, url, data = null) {
  return instances.instanceForPostMultiPart[requestType](url, data)
}