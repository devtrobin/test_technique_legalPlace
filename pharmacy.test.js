import { Drug, Pharmacy } from "./pharmacy";

const updateInventory = (drugs) => new Pharmacy(drugs).updateBenefitValue();

describe("Pharmacy.updateBenefitValue", () => {
  it("updates a standard drug before expiration", () => {
    expect(updateInventory([new Drug("Doliprane", 10, 20)])).toEqual([
      new Drug("Doliprane", 9, 19),
    ]);
  });

  it("updates a standard drug after expiration", () => {
    expect(updateInventory([new Drug("Doliprane", 0, 10)])).toEqual([
      new Drug("Doliprane", -1, 8),
    ]);
  });

  it("never makes a standard drug benefit negative", () => {
    expect(updateInventory([new Drug("Doliprane", 0, 0)])).toEqual([
      new Drug("Doliprane", -1, 0),
    ]);
  });

  it("never makes a standard drug benefit exceed 50", () => {
    expect(
      updateInventory([new Drug("Doliprane", 10, 50)])[0].benefit,
    ).toBeLessThanOrEqual(50);
  });

  it("updates Herbal Tea before expiration", () => {
    expect(updateInventory([new Drug("Herbal Tea", 10, 20)])).toEqual([
      new Drug("Herbal Tea", 9, 21),
    ]);
  });

  it("updates Herbal Tea after expiration", () => {
    expect(updateInventory([new Drug("Herbal Tea", 0, 20)])).toEqual([
      new Drug("Herbal Tea", -1, 22),
    ]);
  });

  it("keeps Herbal Tea benefit capped at 50", () => {
    expect(updateInventory([new Drug("Herbal Tea", 10, 50)])).toEqual([
      new Drug("Herbal Tea", 9, 50),
    ]);
  });

  it("updates Fervex with more than 10 days left", () => {
    expect(updateInventory([new Drug("Fervex", 11, 20)])).toEqual([
      new Drug("Fervex", 10, 21),
    ]);
  });

  it("updates Fervex with 10 days or less left", () => {
    expect(updateInventory([new Drug("Fervex", 10, 20)])).toEqual([
      new Drug("Fervex", 9, 22),
    ]);
  });

  it("updates Fervex with 5 days or less left", () => {
    expect(updateInventory([new Drug("Fervex", 5, 20)])).toEqual([
      new Drug("Fervex", 4, 23),
    ]);
  });

  it("drops Fervex benefit to 0 after expiration", () => {
    expect(updateInventory([new Drug("Fervex", 0, 20)])).toEqual([
      new Drug("Fervex", -1, 0),
    ]);
  });

  it("keeps Fervex benefit capped at 50", () => {
    expect(updateInventory([new Drug("Fervex", 10, 50)])).toEqual([
      new Drug("Fervex", 9, 50),
    ]);
  });

  it("does not change Magic Pill", () => {
    expect(updateInventory([new Drug("Magic Pill", 15, 40)])).toEqual([
      new Drug("Magic Pill", 15, 40),
    ]);
  });

  it("does not change Magic Pill after expiration", () => {
    expect(updateInventory([new Drug("Magic Pill", 0, 40)])).toEqual([
      new Drug("Magic Pill", 0, 40),
    ]);
  });

  it("updates Dafalgan before expiration", () => {
    expect(updateInventory([new Drug("Dafalgan", 10, 20)])).toEqual([
      new Drug("Dafalgan", 9, 18),
    ]);
  });

  it("updates Dafalgan after expiration", () => {
    expect(updateInventory([new Drug("Dafalgan", 0, 10)])).toEqual([
      new Drug("Dafalgan", -1, 6),
    ]);
  });

  it("never makes Dafalgan benefit negative", () => {
    expect(updateInventory([new Drug("Dafalgan", 0, 3)])).toEqual([
      new Drug("Dafalgan", -1, 0),
    ]);
  });

  it("updates several drugs in one pass", () => {
    expect(
      updateInventory([
        new Drug("Doliprane", 10, 20),
        new Drug("Herbal Tea", 10, 20),
        new Drug("Fervex", 10, 20),
        new Drug("Magic Pill", 15, 40),
        new Drug("Dafalgan", 10, 20),
      ]),
    ).toEqual([
      new Drug("Doliprane", 9, 19),
      new Drug("Herbal Tea", 9, 21),
      new Drug("Fervex", 9, 22),
      new Drug("Magic Pill", 15, 40),
      new Drug("Dafalgan", 9, 18),
    ]);
  });
});
