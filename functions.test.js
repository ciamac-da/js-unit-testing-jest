// Importing the functions file
const functions = require("./functions")

// toBe
test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4)
})

// not.toBe
test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// toBeNull
test("Should be null", () => {
    expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test("Should be falsy", () => {
    // Here you can also use 0 or undefined instead of false
    // because all of them are falsy
    expect(functions.checkValue(false)).toBeFalsy()
})

// toEqual
test("User should be Ciamac Da object", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Ciamac",
        lastName: "Da"
    })
})

// tobeLessThan
test("Should be under 1600", () => {
    const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
})

// toBeLessThanOrEqual
test("Should be under 1600", () => {
    const load1 = 800
    const load2 = 800
    expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// toBeGreaterThan
test("Should be under 1600", () => {
    const load1 = 800
    const load2 = 900
    expect(load1 + load2).toBeGreaterThan(1600)
})


// toBeGreaterThanOrEqual
test("Should be under 1600", () => {
    const load1 = 800
    const load2 = 800
    expect(load1 + load2).toBeGreaterThanOrEqual(1600)
})

// Regex
test("There is no I in team", () => {
    expect("team").not.toMatch(/I/i)
})

// Arrays
test("Admin should be in usernames", () => {
    usernames = ["admin", "user", "root"]
    expect(usernames).toContain("root")
})