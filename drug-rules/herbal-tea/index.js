// Herbal Tea gains 1 benefit per day, then 2 per day after expiration, capped at 50.
import { decreaseExpiresIn, increaseBenefit } from "../utils";

export const updateBenefitValue = (drug) => {
  increaseBenefit(drug, 1);
  decreaseExpiresIn(drug);

  if (drug.expiresIn < 0) {
    increaseBenefit(drug, 1);
  }

  return drug;
};
