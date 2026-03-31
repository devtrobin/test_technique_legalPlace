import { Drug } from "../../pharmacy";
import { updateBenefitValue } from "./index";

describe("Doliprane rule", () => {
  it("decreases expiresIn and benefit before expiration", () => {
    expect(updateBenefitValue(new Drug("Doliprane", 10, 20))).toEqual(
      new Drug("Doliprane", 9, 19),
    );
  });

  it("decreases benefit twice as fast after expiration", () => {
    expect(updateBenefitValue(new Drug("Doliprane", 0, 10))).toEqual(
      new Drug("Doliprane", -1, 8),
    );
  });

  it("never drops benefit below 0", () => {
    expect(updateBenefitValue(new Drug("Doliprane", 0, 0))).toEqual(
      new Drug("Doliprane", -1, 0),
    );
  });

  it("never has a benefit above 50", () => {
    expect(updateBenefitValue(new Drug("Doliprane", 10, 50)).benefit).toBeLessThanOrEqual(50);
  });
});
