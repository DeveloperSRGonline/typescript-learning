// T is locked in when the interface is declared/implemented
interface APIResponse<T> {
  status: number;
  data: T;
  error?: string;
}

// Usage with a specific shape
interface User {
  id: number;
  name: string;
}

const userResponse: APIResponse<User> = {
  status: 200,
  data: { id: 1, name: "Alice" },
};

console.log(userResponse.status)
console.log(userResponse.data)
console.log(userResponse.data.id)
console.log(userResponse.data.name)