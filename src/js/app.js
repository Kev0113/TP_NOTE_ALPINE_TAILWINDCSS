import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";
import Menu from "./components/Menu.js";
import Projets from "./components/Projets.js";
import Faq from "./components/Faq.js";
// import Competences from "./components/Competences.js";

window.Alpine = Alpine;

window.addEventListener('DOMContentLoaded', () => {
    const {alpineInitialized, Alpine} = window;
    if (alpineInitialized) {
        return;
    }

    window.alpineInitialized = true;
    const {data, start, plugin} = Alpine;
    plugin(intersect);
    plugin(persist);
    data('Menu',Menu)
    data('Projets',Projets)
    data('Faq',Faq)
    // data('Competences',Competences)
    start();
});
