// Herbal Tea gains 1 benefit per day, then 2 per day after expiration, capped at 50.
const increaseBenefit = (drug, amount) => {
  drug.benefit = Math.min(50, drug.benefit + amount);
};

export const updateBenefitValue = (drug) => {
  increaseBenefit(drug, 1);
  drug.expiresIn -= 1;

  if (drug.expiresIn < 0) {
    increaseBenefit(drug, 1);
  }

  return drug;
};
