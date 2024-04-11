const { createStringFromString } = require("../createStringFromString");

describe("testing createStringFromString function", () => {
  it("creates a string by adding the last 3 characters at both the front and back", () => {
    expect(createStringFromString("johndoe")).toBe("doejohndoedoe");
    expect(createStringFromString("ian")).toBe("ianianian");
    expect(createStringFromString("doe")).toBe("doedoedoe");
  });

  it("validates that inputString is of type string", () => {
    const input = 123;
    expect(() => createStringFromString(input)).toThrow("Invalid input");
  });

  it("validates that inputString is provided", () => {
    expect(() => createStringFromString()).toThrow("Invalid input");
  });

  it("validates that inputString's length is greater not less than 3", () => {
    expect(() => createStringFromString("te")).toThrow("Invalid input");
  });
});
