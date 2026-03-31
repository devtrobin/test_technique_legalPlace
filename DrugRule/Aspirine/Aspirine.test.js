import { Drug } from "../../pharmacy";
import { updateBenefitValue } from "./index";

describe("Aspirine rule", () => {
  it("decreases expiresIn and benefit before expiration", () => {
    expect(updateBenefitValue(new Drug("Aspirine", 10, 20))).toEqual(
      new Drug("Aspirine", 9, 19),
    );
  });

  it("decreases benefit twice as fast after expiration", () => {
    expect(updateBenefitValue(new Drug("Aspirine", 0, 10))).toEqual(
      new Drug("Aspirine", -1, 8),
    );
  });

  it("never drops benefit below 0", () => {
    expect(updateBenefitValue(new Drug("Aspirine", 0, 0))).toEqual(
      new Drug("Aspirine", -1, 0),
    );
  });

  it("never has a benefit above 50", () => {
    expect(updateBenefitValue(new Drug("Aspirine", 10, 50)).benefit).toBeLessThanOrEqual(50);
  });
});
