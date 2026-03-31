// Dafalgan follows the standard rule but degrades twice as fast.
import { decreaseBenefit, decreaseExpiresIn } from "../utils";

export const updateBenefitValue = (drug) => {
  decreaseBenefit(drug, 2);
  decreaseExpiresIn(drug);

  if (drug.expiresIn < 0) {
    decreaseBenefit(drug, 2);
  }

  return drug;
};
