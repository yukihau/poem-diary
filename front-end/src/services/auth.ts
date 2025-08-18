export function getUser(token?: string) {
  console.log(token);
  if (token) return { username: "yukiiris" };
  throw new Error("Invalid token!")
}