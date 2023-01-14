// You don't have to always pass the types to a generic function

const addIdtoObject = <TObj>(obj: TObj) => {
  return {
    ...obj,
    id: "123",
  };
};

const result = addIdtoObject({
  firstName: "Gabe",
  lastName: "Durand",
});

console.log(result);
