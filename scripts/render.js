import {summary, educations, jobs, ecs, skills} from "./data.js"
import { renderList } from "./functions.js";


renderList(summary, "summary-text")
renderList(educations, "education-text")
renderList(jobs, "experience-text")
renderList(skills, "skills-text")
renderList(ecs, "activities-text")