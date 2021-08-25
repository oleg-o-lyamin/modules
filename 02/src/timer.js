import { formatError } from "./utils.js";
import { Howl } from '../node_modules/howler/dist/howler.core.min.js';

import sound from '../sounds/alarm.wav';

const loadTimer = () => {
    const form = document.createElement("form");

    const label1 = document.createElement("label");
    const s1 = document.createElement("strong");
    s1.innerHTML = "Таймер (секунд):";
    const i1 = document.createElement("input");
    i1.type = "text";
    i1.id = "time";
    label1.appendChild(s1);
    label1.appendChild(i1);

    const button = document.createElement("button");
    button.type = 'submit';
    button.innerHTML = "Старт";

    const error = document.createElement("p");

    form.appendChild(label1);
    form.appendChild(button);

    let interval;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        error.innerHTML = "";

        if (!i1.disabled) {
            let { time } = event.target.elements;
            time = time.value;

            if (parseInt(time) != undefined && time > 0) {
                button.innerHTML = "Стоп";
                i1.disabled = true;

                interval = setInterval(() => {
                    i1.value = i1.value - 1;

                    if (i1.value == 0) {
                        i1.value = "";
                        button.innerHTML = "Старт";
                        i1.disabled = false;
                        new Howl({ src: sound }).play();
                        clearInterval(interval);
                    }
                }, 1000);
            }
            else {
                error.innerHTML = formatError("Введите целое положительое число!");
            }
        }
        else {
            clearInterval(interval);
            button.innerHTML = "Старт";
            i1.disabled = false;
        }
    });

    const mainDiv = document.createElement("div");

    mainDiv.appendChild(form);
    mainDiv.appendChild(error);

    return mainDiv;
}

export { loadTimer };

