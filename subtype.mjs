import createHandler from './handler';

export default function subtype (obj) {
  return new Proxy(obj, createHandler(obj));
};