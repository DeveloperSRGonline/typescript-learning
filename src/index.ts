function identity<Type>(something: Type): Type {
  return something;
}

console.log(identity<number>(123))
console.log(identity<string>("String"))
console.log(identity("without writing Generic type parameter"))

identity<string>("Hello"); // Explicitly tells Type = string

identity("Hello");         // TypeScript infers Type = string

// this is invalid
// function identity<string>(something: string): string {
//   return something;
// }