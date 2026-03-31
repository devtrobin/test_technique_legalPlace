const increaseBenefit = (drug, amount) => {
  drug.benefit = Math.min(50, drug.benefit + amount);
};

export const updateBenefitValue = (drug) => {
  increaseBenefit(drug, 1);

  if (drug.expiresIn <= 10) {
    increaseBenefit(drug, 1);
  }

  if (drug.expiresIn <= 5) {
    increaseBenefit(drug, 1);
  }

  drug.expiresIn -= 1;

  if (drug.expiresIn < 0) {
    drug.benefit = 0;
  }

  return drug;
};
