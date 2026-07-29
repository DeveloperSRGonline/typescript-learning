function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("ID", 101); // Inferred as [string, number]
console.log(result)