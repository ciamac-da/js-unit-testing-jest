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