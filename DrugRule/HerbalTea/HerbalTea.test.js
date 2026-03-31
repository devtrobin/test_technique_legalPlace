import { Drug } from "../../pharmacy";
import { updateBenefitValue } from "./index";

describe("Herbal Tea rule", () => {
  it("increases benefit before expiration", () => {
    expect(updateBenefitValue(new Drug("Herbal Tea", 10, 20))).toEqual(
      new Drug("Herbal Tea", 9, 21),
    );
  });

  it("increases benefit twice as fast after expiration", () => {
    expect(updateBenefitValue(new Drug("Herbal Tea", 0, 20))).toEqual(
      new Drug("Herbal Tea", -1, 22),
    );
  });

  it("stays capped at 50 before expiration", () => {
    expect(updateBenefitValue(new Drug("Herbal Tea", 10, 50))).toEqual(
      new Drug("Herbal Tea", 9, 50),
    );
  });

  it("stays capped at 50 after expiration", () => {
    expect(updateBenefitValue(new Drug("Herbal Tea", 0, 50))).toEqual(
      new Drug("Herbal Tea", -1, 50),
    );
  });
});
