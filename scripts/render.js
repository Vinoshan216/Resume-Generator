import {summary_data, educations} from "./data.js"
import { renderList } from "./functions.js";

let html = '';
html = summary_data
document.querySelector(`.js-summary-text`).innerHTML = html;

renderList(educations, "education-text")