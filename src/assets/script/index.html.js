import { Intro } from "./classes/class.intro.js";
import { Menu } from "./classes/class.menu.js";
import { randomStar } from "./helpers.js";

/////////////////////////
// Configuration Intro //
/////////////////////////
const appRoot = document.querySelector("body");
let stars = 100;
let menuList = [{ label: "liste", href: "./pages/liste.html" }];

randomStar(stars, appRoot);
new Menu(menuList, appRoot);
new Intro(appRoot);
