
import { Page } from "./Page";

const today = new Page("Today", "Projects for Today");

const personal = new Page("Personal", "Personal Projects");

const planned = new Page("Planned", "Future Projects ");
const work = new Page("Work","Projects for Work");

const content = {
    today,
    personal,
    planned,
    work
};

export {content};