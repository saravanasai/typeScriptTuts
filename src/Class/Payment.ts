import { HasFrommater } from "../Interfaces/HasFrommater.js";

export class Payment implements HasFrommater {
  constructor(
    readonly from: string,
    private description: string,
    private amount: number
  ) {}

  format(): string {
    return `Invoice to Mr/Ms ${this.from} for amount RS:${this.amount}\- description : ${this.description}`;
  }
}
