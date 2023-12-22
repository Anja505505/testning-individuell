export const getUsers = (): Promise<{ name: string; group: number }[]> => {
    return new Promise((resolve) => {
      resolve([
        { name: "Erik", group: 1 },
        { name: "Lisa", group: 2 },
        { name: "Hampus", group: 1 },
      ]);
    });
  };

  export const getGroups = (): Promise<{ name: string; group: number }[]> => {
    return new Promise((resolve) => {
      resolve([
        { name: "Linda", group: 3 },
        { name: "Eva", group: 1 },
        { name: "Anna", group: 3 },
      ]);
    });
  };
