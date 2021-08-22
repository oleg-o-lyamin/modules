import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";

const loadDateCalc = () => {
    const form = document.createElement("form");

    const label1 = document.createElement("label");
    const s1 = document.createElement("strong");
    s1.innerHTML = "Первая дата:";
    const i1 = document.createElement("input");
    i1.type = "date";
    i1.id = "firstDate";
    label1.appendChild(s1);
    label1.appendChild(i1);

    const label2 = document.createElement("label");
    const s2 = document.createElement("strong");
    s2.innerHTML = "Вторая дата:";
    const i2 = document.createElement("input");
    i2.type = "date";
    i2.id = "secondDate";
    label2.appendChild(s2);
    label2.appendChild(i2);

    const button = document.createElement("button");
    button.type = 'submit';
    button.innerHTML = "Рассчитать промежуток";

    form.appendChild(label1);
    form.appendChild(label2);
    form.appendChild(button);

    const dateCalcResult = document.createElement("p");
    dateCalcResult.id = "datecalc_result";

    form.addEventListener("submit", (event) => {
        dateCalcResult.innerHTML = "";
        event.preventDefault();

        let { firstDate, secondDate } = event.target.elements;
        firstDate = firstDate.value, secondDate = secondDate.value;

        if (firstDate && secondDate) {
            const diff = diffDates(firstDate, secondDate);
            dateCalcResult.innerHTML = diffToHtml(diff);
        }
        else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
    });

    const mainDiv = document.createElement("div");

    mainDiv.appendChild(form);
    mainDiv.appendChild(dateCalcResult);

    return mainDiv;
}

export { loadDateCalc };

