export class AbilityModel {
  name: string;
  type: "Ação" | "Reação" | "Suporte";
  cost: string;
  requisites: string;
  diff: number;
  description: string;
}