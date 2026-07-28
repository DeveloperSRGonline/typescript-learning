// Interface Merging (Works)
interface Window {
  title: string;
}
interface Window {
  ts: string;
}

// Resulting Window object has both 'title' and 'ts'

// Type Alias Redeclaration (Fails)
type Config = { port: number };
// type Config = { host: string }; // Error: Duplicate identifier 'Config'.