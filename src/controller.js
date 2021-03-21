// handle DOM operations

import home from "./home";
import menu from "./menu.js";
import contact from "./contact";

const controller = function (container) {
  const tabRow = document.createElement("div");
  tabRow.classList.add("tab-header");
  const mainArea = document.createElement("main");
  container.appendChild(tabRow);
  container.appendChild(mainArea);

  let currentTabID;
  // TODO: Move this to the index page, this module should hold no data
  let pages = [
    { name: "Home", default: true, html: home },
    { name: "Menu", html: menu },
    { name: "Contact", html: contact },
  ];
  // pages is an array of objects,
  // with properties:
  // name: Name of the page,
  // default: depicts whether this is the default page to be rendered
  // html: The html string that should be rendered in the page.

  const createTabHeadingFactory = function (id, name, defaultTab = false) {
    const tab = document.createElement("button");
    tab.setAttribute("data-id", id);
    tab.classList.add("tab");
    if (defaultTab) tab.classList.add("active");

    tab.addEventListener("click", (e) => handleTabClick(e));
    tab.innerText = name;

    return tab;
  };

  const handleTabClick = function (e) {
    const clickedTabID = e.target.getAttribute("data-id");
    if (clickedTabID != currentTabID) {
      const currentTab = document.querySelector(`[data-id='${currentTabID}']`);
      currentTab.classList.remove("active");

      const clickedPage = pages[clickedTabID];
      e.target.classList.add("active");
      if (clickedPage) mainArea.innerHTML = clickedPage.html;

      currentTabID = clickedTabID;
    }
  };

  const renderFirstState = function () {
    for (let i = 0; i < pages.length; i++) {
      const pageMeta = pages[i];
      let tab = createTabHeadingFactory(i, pageMeta.name, pageMeta.default);
      tabRow.appendChild(tab);

      if (pageMeta.default) {
        mainArea.innerHTML = pageMeta.html;
        currentTabID = i;
      }
    }
  };

  return { renderFirstState };
};

export default controller;
