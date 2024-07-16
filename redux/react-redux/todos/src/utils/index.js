export function generateId() {
  return (
    Math.random().toString(16).substring(2) + new Date().getTime().toString(16)
  );
}
