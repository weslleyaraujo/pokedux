export default function navigate(history, path, event) {
  let { push } = history;
  return (event) => {
    event.preventDefault();
    push(path);
  }
}

