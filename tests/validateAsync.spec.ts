import { getUsers, getGroups } from "./validateAsync";

describe("getUsers", () => {
  it("should return an array of users", async () => {
    const users = await getUsers();
    expect(users).toEqual([
      { name: "Erik", group: 1 },
      { name: "Lisa", group: 2 },
      { name: "Hampus", group: 1 },
    ]);
  });
});

describe("getGroups", () => {
  it("should return an array of groups", async () => {
    const groups = await getGroups();
    expect(groups).toEqual([
      { name: "Linda", group: 3 },
      { name: "Eva", group: 1 },
      { name: "Anna", group: 3 },
    ]);
  });
});
