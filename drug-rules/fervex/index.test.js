import { Drug } from "../../pharmacy";
import { updateBenefitValue } from "./index";

describe("Fervex rule", () => {
  it("increases benefit by 1 when there are more than 10 days left", () => {
    expect(updateBenefitValue(new Drug("Fervex", 11, 20))).toEqual(
      new Drug("Fervex", 10, 21),
    );
  });

  it("increases benefit by 2 when there are 10 days or less left", () => {
    expect(updateBenefitValue(new Drug("Fervex", 10, 20))).toEqual(
      new Drug("Fervex", 9, 22),
    );
  });

  it("increases benefit by 3 when there are 5 days or less left", () => {
    expect(updateBenefitValue(new Drug("Fervex", 5, 20))).toEqual(
      new Drug("Fervex", 4, 23),
    );
  });

  it("drops benefit to 0 after expiration", () => {
    expect(updateBenefitValue(new Drug("Fervex", 0, 20))).toEqual(
      new Drug("Fervex", -1, 0),
    );
  });

  it("stays capped at 50", () => {
    expect(updateBenefitValue(new Drug("Fervex", 5, 49))).toEqual(
      new Drug("Fervex", 4, 50),
    );
  });
});
