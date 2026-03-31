// Standard drug: benefit decreases by 1 each day, then by 2 after expiration.
import { decreaseBenefit, decreaseExpiresIn } from "../utils";

export const updateStandardDrug = (drug) => {
  decreaseBenefit(drug, 1);
  decreaseExpiresIn(drug);

  if (drug.expiresIn < 0) {
    decreaseBenefit(drug, 1);
  }

  return drug;
};

export const updateBenefitValue = updateStandardDrug;
