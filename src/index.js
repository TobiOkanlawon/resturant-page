import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

(function () {
  const contentTag = document.getElementById("content");
  // The content tag is the root tag for all our html

  // Setting the page header.
  const heading = document.createElement("h1");
  heading.classList.add("title");
  heading.innerText = "Pretentious Resturants";
  contentTag.appendChild(heading);

  // The tabHeader tag is the div that contains the tabs
  const tabHeader = document.createElement("div");
  tabHeader.classList.add("tab-header");
  contentTag.appendChild(tabHeader);

  const pageBody = document.createElement("div");
  const pages = [
    { name: "Home", default: true, instantiator: home },
    { name: "Menu", default: false, instantiator: menu },
    { name: "Contact", default: false, instantiator: contact },
  ];
  contentTag.appendChild(pageBody);

  const handlePageSwitch = function () {
    pageBody.innerHTML = "";
  };

  const createNewTab = function (name, fn) {
    const tab = document.createElement("button");
    tab.classList.add("tab");
    tab.innerHTML = name;
    tab.addEventListener("click", (_) => {
      handlePageSwitch();
      fn(pageBody);
    });
    tabHeader.appendChild(tab);
  };

  const createPages = function () {
    // iterate, create, , bind events here too, append
    for (const page of pages) {
      createNewTab(page.name, page.instantiator);

      // sets the default page
      if (page.default) page.instantiator(pageBody);
    }
  };

  // Pages in an array of the information about the pages:
  // The name to use for their tab heading.
  // The function that evokes the pages.

  createPages();
})();
