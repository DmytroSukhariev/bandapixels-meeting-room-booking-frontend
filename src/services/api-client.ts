import { networkInterfaces } from 'os';

const apiHost = 'http://localhost:8000';

enum ReqMethod {
  GET = 'GET',
  POST = 'POST',
}

const req = async <Response>(params: {
  uri: string,
  method: ReqMethod,
  body?: Record<string, any>,
  queryParams?: Record<string, any>
}): Promise<Response> => {
  let queryString: string = '';
  {
    let preQueryString = new URLSearchParams(params.queryParams);
    if (Object.keys(preQueryString).length) queryString = `?${preQueryString}`;
  }

  const url = `${apiHost}${params.uri}${queryString}`

  const fetchConfig: RequestInit = {
    method: params.method,
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  if (params.body) fetchConfig.body = JSON.stringify(params.body);

  return fetch(url, fetchConfig).then((res) => res.json())
}

export const Get = <Response>(uri: string, queryParams: Record<string, any>): Promise<Response> => req<Response>({ uri, queryParams, method: ReqMethod.GET });
export const Post = <Response>(uri: string, body: Record<string, any>,queryParams?: Record<string, any>): Promise<Response> => req<Response>({ uri, queryParams, method: ReqMethod.POST, body });