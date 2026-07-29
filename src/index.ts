interface Database {
  get<T>(table: string): T;
}

class MyDatabase implements Database {
  get<T>(table: string): T {
    // Imagine this data comes from a real database
    const database = {
      user: { id: 1, name: "Shivam" },
      product: { id: 101, title: "Laptop", price: 50000 },
    };

    return database[table as keyof typeof database] as T;
  }
}

const db = new MyDatabase();

const user = db.get<{ id: number; name: string }>("user");
const product = db.get<{ id: number; title: string; price: number }>("product");

console.log(user.id,user.name);      // Shivam
console.log(product.title,product.price);  // 50000


// conslusion
// We provide the type of the value we expect the method to return.