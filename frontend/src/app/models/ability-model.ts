export class AbilityModel {
  name: string;
  type: "Ação" | "Reação" | "Suporte";
  cost: string;
  diff: number;
  requisites: string;
  description: string;
}
