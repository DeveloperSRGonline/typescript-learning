// K must be a valid key of object type T
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Sarah", age: 28 };

const username = getProperty(user, "name"); // Valid, returns string
const age = getProperty(user, "age"); // Valid, returns string
// getProperty(user, "email");              // Error: 'email' doesn't exist on user

console.log(username,age)
console.log(user["name"])
console.log(user["age"])