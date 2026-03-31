// Standard drug: benefit decreases by 1 each day, then by 2 after expiration.
const decreaseBenefit = (drug, amount) => {
  drug.benefit = Math.max(0, drug.benefit - amount);
};

export const updateStandardDrug = (drug) => {
  decreaseBenefit(drug, 1);
  drug.expiresIn -= 1;

  if (drug.expiresIn < 0) {
    decreaseBenefit(drug, 1);
  }

  return drug;
};

export const updateBenefitValue = updateStandardDrug;
