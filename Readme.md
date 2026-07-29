In TypeScript, **Generic Functions** allow you to write reusable code that works over a variety of types while preserving strict type safety (unlike using `any`).

---

---

## Basic Syntax

To make a function generic, use a **type variable** (conventionally named `Type` or `T`) wrapped in angle brackets `<Type>`.

```typescript
// Generic Identity Function
function identity<Type>(arg: Type): Type {
  return arg;
}

```

Here, `Type` captures the specific type provided by the caller, locking in the argument and return types to match.

---

## Key Usage Patterns

### 1. Inferring Type Arguments

In most cases, TypeScript automatically infers the type parameter based on the arguments passed:

```typescript
// Type is inferred as 'string', return type is 'string'
let output1 = identity("Hello World"); 

// Type is inferred as 'number', return type is 'number'
let output2 = identity(42); 

```

### 2. Explicit Type Arguments

You can explicitly set the type parameter if TypeScript cannot infer it automatically:

```typescript
let output3 = identity<boolean>(true);

```

### 3. Multiple Type Parameters

Generics support working with multiple parameters:

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("ID", 101); // Inferred as [string, number]

```

### 4. Generic Constraints (`extends`)

Restrict the types allowed in a generic function by using the `extends` keyword:

```typescript
interface Lengthwise {
  length: number;
}

// Accepts any argument that has a '.length' property
function logLength<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

logLength("TypeScript");  // Valid (strings have .length)
logLength([1, 2, 3]);     // Valid (arrays have .length)
// logLength(10);         // Error: Numbers do not have a .length property

```

---

## Why Use Generics?

* **Type Safety:** Catches bugs at compile time by avoiding unsafe `any` types.
* **Reusability:** Avoids duplicating logic across different input types.
* **Autocompletion:** Preserves exact variable structure and methods in IDE auto-suggests.