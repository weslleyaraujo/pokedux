export default function navigate(history = {}, path = '/') {
  let { push } = history;

  return (event) => {
    event.preventDefault();
    push(path);
  }
}

