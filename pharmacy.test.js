import { Drug, Pharmacy } from "./pharmacy";

const updateDrug = (name, expiresIn, benefit) =>
  new Pharmacy([new Drug(name, expiresIn, benefit)]).updateBenefitValue()[0];

describe("Normal drugs", () => {
  it("should decrease the expiration date by 1 before expiration", () => {
    expect(updateDrug("Doliprane", 10, 20)).toEqual(
      new Drug("Doliprane", 9, 19),
    );
  });

  it("should decrease the benefit by 1 before expiration", () => {
    expect(updateDrug("Doliprane", 5, 10).benefit).toBe(9);
  });

  it("should decrease the benefit by 2 after expiration", () => {
    expect(updateDrug("Doliprane", 0, 10)).toEqual(
      new Drug("Doliprane", -1, 8),
    );
  });

  it("should never reduce the benefit below 0", () => {
    expect(updateDrug("Doliprane", 0, 0)).toEqual(new Drug("Doliprane", -1, 0));
  });

  it("should never have a benefit above 50", () => {
    expect(updateDrug("Doliprane", 10, 50).benefit).toBeLessThanOrEqual(50);
  });
});

describe("Herbal Tea", () => {
  it("should decrease the expiration date by 1", () => {
    expect(updateDrug("Herbal Tea", 10, 20).expiresIn).toBe(9);
  });

  it("should increase the benefit by 1 before expiration", () => {
    expect(updateDrug("Herbal Tea", 10, 20)).toEqual(
      new Drug("Herbal Tea", 9, 21),
    );
  });

  it("should increase the benefit by 2 after expiration", () => {
    expect(updateDrug("Herbal Tea", 0, 20)).toEqual(
      new Drug("Herbal Tea", -1, 22),
    );
  });

  it("should never increase the benefit above 50", () => {
    expect(updateDrug("Herbal Tea", 0, 50)).toEqual(
      new Drug("Herbal Tea", -1, 50),
    );
  });

  it("should stay at 50 before expiration", () => {
    expect(updateDrug("Herbal Tea", 10, 50)).toEqual(
      new Drug("Herbal Tea", 9, 50),
    );
  });
});

describe("Fervex", () => {
  it("should decrease the expiration date by 1", () => {
    expect(updateDrug("Fervex", 12, 20).expiresIn).toBe(11);
  });

  it("should increase the benefit by 1 when there are more than 10 days left", () => {
    expect(updateDrug("Fervex", 11, 20)).toEqual(new Drug("Fervex", 10, 21));
  });

  it("should increase the benefit by 2 when there are 10 days or less left", () => {
    expect(updateDrug("Fervex", 10, 20)).toEqual(new Drug("Fervex", 9, 22));
  });

  it("should increase the benefit by 3 when there are 5 days or less left", () => {
    expect(updateDrug("Fervex", 5, 20)).toEqual(new Drug("Fervex", 4, 23));
  });

  it("should drop the benefit to 0 after expiration", () => {
    expect(updateDrug("Fervex", 0, 20)).toEqual(new Drug("Fervex", -1, 0));
  });

  it("should never increase the benefit above 50", () => {
    expect(updateDrug("Fervex", 5, 49)).toEqual(new Drug("Fervex", 4, 50));
  });

  it("should stay at 50 when there are 10 days or less left", () => {
    expect(updateDrug("Fervex", 10, 50)).toEqual(new Drug("Fervex", 9, 50));
  });
});

describe("Magic Pill", () => {
  it("should not change the expiration date", () => {
    expect(updateDrug("Magic Pill", 15, 40).expiresIn).toBe(15);
  });

  it("should not change the benefit before expiration", () => {
    expect(updateDrug("Magic Pill", 15, 40)).toEqual(
      new Drug("Magic Pill", 15, 40),
    );
  });

  it("should not change the benefit after expiration", () => {
    expect(updateDrug("Magic Pill", 0, 40)).toEqual(
      new Drug("Magic Pill", 0, 40),
    );
  });

  it("should never have a benefit above 50", () => {
    expect(updateDrug("Magic Pill", 15, 50).benefit).toBeLessThanOrEqual(50);
  });
});

/*
describe("Dafalgan", () => {
  it("should decrease the expiration date by 1", () => {
    expect(updateDrug("Dafalgan", 10, 20).expiresIn).toBe(9);
  });

  it("should decrease the benefit twice as fast as a normal drug before expiration", () => {
    expect(updateDrug("Dafalgan", 10, 20)).toEqual(new Drug("Dafalgan", 9, 18));
  });

  it("should decrease the benefit twice as fast after expiration", () => {
    expect(updateDrug("Dafalgan", 0, 10)).toEqual(new Drug("Dafalgan", -1, 6));
  });

  it("should never reduce the benefit below 0", () => {
    expect(updateDrug("Dafalgan", 0, 3)).toEqual(new Drug("Dafalgan", -1, 0));
  });

  it("should never have a benefit above 50", () => {
    expect(updateDrug("Dafalgan", 10, 50).benefit).toBeLessThanOrEqual(50);
  });
});
*/
