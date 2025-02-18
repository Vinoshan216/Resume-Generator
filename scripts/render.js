import {summary, educations, jobs, ecs, skills, projects} from "./data.js"
import { renderList } from "./functions.js";


renderList(summary, "summary-text")
renderList(educations, "education-text")
renderList(jobs, "experience-text")
renderList(ecs, "activities-text")
renderList(projects, "projects-text")
renderList(skills, "skills-text")
