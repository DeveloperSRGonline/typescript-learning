interface HasId {
  id: string | number;
}

// T MUST have an 'id' property
function printId<T extends HasId>(item: T): void {
  console.log(`Item ID: ${item.id}`);
}

// printId({ id: 101, title: "Product A" }); // Valid
// // printId({ title: "Product B" });       // Error: Property 'id' is missing

printId({id:"string id"})
// printId({title:"string title"})// must have id atleast more things can be accepted if id is there

// this meand accepting value with union's considered types