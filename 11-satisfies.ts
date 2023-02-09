type User = Record<string, number | string>;

const user = {
  name: "joe",
  age: 21,
} satisfies User;

let userName = user.name;
