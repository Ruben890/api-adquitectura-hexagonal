export type HttpResponse = {
  statusCode: number;
  message?: any;
  body?: any;
};

export interface IController<T = any> {
  handle: (request?: T) => Promise<HttpResponse>;
}
