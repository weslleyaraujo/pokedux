export default function navigate(history = {}, path = '/') {
  let { push } = history;
  // if (!push) {
  //   throw new Error ('navigate: cant get `push` from history argument');
  // }

  return (event) => {
    event.preventDefault();
    push(path);
  }
}

