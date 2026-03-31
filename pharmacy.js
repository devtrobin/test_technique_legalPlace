import { updateBenefitValue as updateAspirine } from "./DrugRule/Aspirine";
import { updateBenefitValue as updateDafalgan } from "./DrugRule/Dafalgan";
import { updateBenefitValue as updateDoliprane } from "./DrugRule/Doliprane";
import { updateBenefitValue as updateFervex } from "./DrugRule/Fervex";
import { updateBenefitValue as updateHerbalTea } from "./DrugRule/HerbalTea";
import { updateBenefitValue as updateMagicPill } from "./DrugRule/MagicPill";

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
      Aspirine: updateAspirine,
      Dafalgan: updateDafalgan,
      Doliprane: updateDoliprane,
      Fervex: updateFervex,
      "Herbal Tea": updateHerbalTea,
      "Magic Pill": updateMagicPill,
    };

    return rules[name] || updateDoliprane;
  }
}
