const decreaseBenefit = (drug, amount) => {
  drug.benefit = Math.max(0, drug.benefit - amount);
};

export const updateBenefitValue = (drug) => {
  decreaseBenefit(drug, 1);
  drug.expiresIn -= 1;

  if (drug.expiresIn < 0) {
    decreaseBenefit(drug, 1);
  }

  return drug;
};
