import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const tabbedInterface = (function () {
  const tabHeader = document.createElement("div");
  const contentTag = document.getElementById("content");

  const pages = [
    { name: "Home", default: true, instantiator: home },
    { name: "Menu", default: true, instantiator: menu },
    { name: "Contact", default: true, instantiator: contact },
  ];
  // Pages in an array of the information about the pages:
  // The name to use for their tab heading.
  // The function that evokes the pages.
  home(contentTag);
})();
