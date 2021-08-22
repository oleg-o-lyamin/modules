
import { loadDateCalc } from "./dc.js";
import { loadTimer } from "./timer.js";

const dateCalcButton = document.getElementById("datecalc_button");
const timerButton = document.getElementById("timer_button");
const buttons = [dateCalcButton, timerButton];

const mainDiv = document.getElementById("main_div");
const loaders = [loadDateCalc, loadTimer];

const load = index => {
    buttons.map((el, ci) => { el.className = (ci == index) ? "selected" : "unselected" });

    mainDiv.innerHTML = "";
    mainDiv.appendChild(loaders[index]());
}

buttons.map((el, ci) => { el.addEventListener("click", () => { load(ci); }) });

load(0);