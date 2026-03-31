import { updateBenefitValue as updateDafalgan } from "./drug-rules/dafalgan";
import { updateBenefitValue as updateFervex } from "./drug-rules/fervex";
import { updateBenefitValue as updateHerbalTea } from "./drug-rules/herbal-tea";
import { updateBenefitValue as updateMagicPill } from "./drug-rules/magic-pill";
import { updateStandardDrug } from "./drug-rules/standard-drug";

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
