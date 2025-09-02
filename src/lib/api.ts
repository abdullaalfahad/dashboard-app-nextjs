export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

export async function fetchUserById(id: number): Promise<User> {
  const res = await fetch(`${BASE_URL}/users/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}
