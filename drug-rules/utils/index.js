export const decreaseBenefit = (drug, amount) => {
  drug.benefit = Math.max(0, drug.benefit - amount);
};

export const increaseBenefit = (drug, amount) => {
  drug.benefit = Math.min(50, drug.benefit + amount);
};

export const decreaseExpiresIn = (drug) => {
  drug.expiresIn -= 1;
};
