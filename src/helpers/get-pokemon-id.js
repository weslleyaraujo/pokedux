export default function getApi(uri) {
  return uri.split('/')
    .reduce((c, n) => c = !n ? c : n, '');
}
