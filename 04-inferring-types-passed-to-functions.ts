const addIdtoObject = <T>(obj: T): T & { id: string } => {
  return {
    ...obj,
    id: "123",
  };
};
