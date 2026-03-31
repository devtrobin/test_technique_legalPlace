import { Drug } from "../../pharmacy";
import { updateBenefitValue } from "./index";

describe("Dafalgan rule", () => {
  it("decreases expiresIn and benefit twice as fast before expiration", () => {
    expect(updateBenefitValue(new Drug("Dafalgan", 10, 20))).toEqual(
      new Drug("Dafalgan", 9, 18),
    );
  });

  it("decreases benefit twice as fast again after expiration", () => {
    expect(updateBenefitValue(new Drug("Dafalgan", 0, 10))).toEqual(
      new Drug("Dafalgan", -1, 6),
    );
  });

  it("never drops benefit below 0", () => {
    expect(updateBenefitValue(new Drug("Dafalgan", 0, 3))).toEqual(
      new Drug("Dafalgan", -1, 0),
    );
  });

  it("never has a benefit above 50", () => {
    expect(updateBenefitValue(new Drug("Dafalgan", 10, 50)).benefit).toBeLessThanOrEqual(50);
  });
});
