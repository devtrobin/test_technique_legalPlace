const increaseBenefit = (drug, amount) => {
  drug.benefit = Math.min(50, drug.benefit + amount);
};

export class HerbalTeaRule {
  updateBenefitValue(drug) {
    increaseBenefit(drug, 1);
    drug.expiresIn -= 1;

    if (drug.expiresIn < 0) {
      increaseBenefit(drug, 1);
    }

    return drug;
  }
}
