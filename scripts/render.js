import {summary_data} from "./data.js"

let html = '';
html = summary_data
document.querySelector(`.js-summary-text`).innerHTML = html;