import navbar from "../components/navbar.js";
import { blueSection, footer } from "../components/footer.js"

let navDiv = document.getElementById("navbar");
navDiv.innerHTML = navbar();

let blueSectionDiv = document.getElementById("blue-section");
blueSectionDiv.innerHTML = blueSection();

let footerDiv = document.getElementById("footer");
footerDiv.innerHTML = footer();
