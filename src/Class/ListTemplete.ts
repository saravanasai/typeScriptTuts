import { HasFrommater } from "../Interfaces/HasFrommater.js";

export class ListTemplete {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFrommater, header: string, pos: "start" | "end") {
    let li = document.createElement("li");

    let h4 = document.createElement("h4");
    let p = document.createElement("p");

    h4.innerText = header;

    li.append(h4);
    p.innerText = item.format();
    li.append(p);

    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
