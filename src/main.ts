import { Invoice } from "./Class/Invoice.js";
import { ListTemplete } from "./Class/ListTemplete.js";
import { Payment } from "./Class/Payment.js";
import { HasFrommater } from "./Interfaces/HasFrommater.js";

const from = document.querySelector(".new-item-form") as HTMLFormElement;

let type = document.querySelector("#type") as HTMLInputElement;
let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

from.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFrommater;

  if (type.value === "Invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  let ul = document.querySelector("ul") as HTMLUListElement;

  new ListTemplete(ul).render(doc, type.value, "end");
});
