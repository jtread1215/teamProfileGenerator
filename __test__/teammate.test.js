const Teammate = require("../lib/teammate");

test("", () => {
    const mate = new Teammate();
    expect(typeof(mate)).toBe("object");
});

test("", () => {
    const name = "";
    const mate = new Teammate(name);
    expect(mate.name).toBe(name);
});