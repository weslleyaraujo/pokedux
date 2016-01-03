/*
 * addNamespace
 *
 * entry:
 *
 * let obj = { foo: 'bar' }
 * addNamespace(obj, 'example');
 *
 * output:
 * { foo--example: 'bar' }
 */
export default function addNamespace(properties = {}, namespace) {
  return Object.keys(properties).reduce((c, n) => {
    c[[`${namespace}--${n}`]] = properties[n];
    return c;
  }, {});
}

