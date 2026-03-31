import {
  updateDafalgan,
  updateFervex,
  updateHerbalTea,
  updateMagicPill,
  updateStandardDrug,
} from "./drug-rules";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => this.getRule(drug.name)(drug));
    return this.drugs;
  }

  getRule(name) {
    const rules = {
      Dafalgan: updateDafalgan,
      Fervex: updateFervex,
      "Herbal Tea": updateHerbalTea,
      "Magic Pill": updateMagicPill,
    };

    return rules[name] || updateStandardDrug;
  }
}
