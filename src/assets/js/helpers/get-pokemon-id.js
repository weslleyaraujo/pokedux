export default function getPokemonId(uri) {
  return uri.split('/')
    .reduce((c, n) => c = !n ? c : n, '');
}
