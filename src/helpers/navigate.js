export default function navigate(history, path, event) {
  event.preventDefault();
  let { push } = history;
  push(path);
}

