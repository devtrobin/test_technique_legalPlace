import { Drug } from "../../pharmacy";
import { updateBenefitValue } from "./index";

describe("Magic Pill rule", () => {
  it("does not change before expiration", () => {
    expect(updateBenefitValue(new Drug("Magic Pill", 15, 40))).toEqual(
      new Drug("Magic Pill", 15, 40),
    );
  });

  it("does not change after expiration", () => {
    expect(updateBenefitValue(new Drug("Magic Pill", 0, 40))).toEqual(
      new Drug("Magic Pill", 0, 40),
    );
  });

  it("does not change expiresIn", () => {
    expect(updateBenefitValue(new Drug("Magic Pill", 15, 40)).expiresIn).toBe(15);
  });

  it("does not change benefit", () => {
    expect(updateBenefitValue(new Drug("Magic Pill", 15, 50)).benefit).toBe(50);
  });
});
