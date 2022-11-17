import { HasFrommater } from "../Interfaces/HasFrommater.js";

export class Invoice implements HasFrommater {
  constructor(
    readonly recpient: string,
    private description: string,
    private amount: number
  ) {}

  format(): string {
    return `Invoice to Mr/Ms ${this.recpient} for amount RS:${this.amount}\- description : ${this.description}`;
  }
}
