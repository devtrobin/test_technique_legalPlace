// Fervex gains benefit as it approaches expiration, then drops to 0 after expiration.
import { decreaseExpiresIn, increaseBenefit } from "../utils";

export const updateBenefitValue = (drug) => {
  increaseBenefit(drug, 1);

  if (drug.expiresIn <= 10) {
    increaseBenefit(drug, 1);
  }

  if (drug.expiresIn <= 5) {
    increaseBenefit(drug, 1);
  }

  decreaseExpiresIn(drug);

  if (drug.expiresIn < 0) {
    drug.benefit = 0;
  }

  return drug;
};
