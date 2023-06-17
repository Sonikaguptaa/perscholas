var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
//1.0
// Select the <main> element
let mainEl = document.querySelector("main");

// Set the background color of the <main> element using a CSS variable
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of the <main> element to a heading
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Add a CSS class to the <main> element to center its contents
mainEl.classList.add("flex-ctr");

//2.0
// Select the element with id "top-menu"
let topMenuE1 = document.querySelector("#top-menu");

// Set the height of the "top-menu" element to 100%
topMenuE1.style.height = "100%";

// Set the background color of the "top-menu" element using a CSS variable
topMenuE1.style.backgroundColor = "var(--top-menu-bg)";

// Add a CSS class to the "top-menu" element to arrange its contents with flex layout
topMenuE1.classList.add("flex-around");
//3.0
// Iterate through the menuLinks array
for (let i = 0; i < menuLinks.length; i++) {
  // Print the text of the current menu link
  console.log(menuLinks[i].text);

  // Create a new <a> element for the menu link
  let mlink = document.createElement("a");

  // Set the innerHTML of the <a> element to the text of the menu link
  mlink.innerHTML = menuLinks[i].text;

  // Set the "href" attribute of the <a> element to the href value of the menu link
  mlink.setAttribute("href", menuLinks[i].href);

  // Append the menu link to the "top-menu" element
  topMenuE1.appendChild(mlink);
}
//4.0

let subMenuE1 = document.querySelector("#sub-menu");

subMenuE1.style.height = "100%";

subMenuE1.style.backgroundColor = "var(--sub-menu-bg)";

subMenuE1.classList.add("flex-around");

//4.4
subMenuE1.style.position = "absolute";

subMenuE1.style.top = "0";
//5.1
let topMenuLinks = topMenuE1.querySelectorAll("a");

var showingSubMenu = false;

//5.2
topMenuE1.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (evt.target.tagName.toLowerCase() !== "a") {
    return;
  }
  console.log(evt.target.textContent);
  //5.3

  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuE1.style.top = "0";
    return;
  }
  //5.4

  if (evt.target.textContent === "about") {
    mainEl.innerHTML = `<h1>about</h1>`;
  }
  for (let item of topMenuLinks) {
    item.classList.remove("active");
  }
  //5.5
  evt.target.classList.add("active");
  //5.6
  let textName = evt.target.textContent;

  let subArray = [];

  for (let item of menuLinks) {
    if (item.text === textName && item.subLinks) {
      showingSubMenu = true;
      for (let sub of item.subLinks) {
        subArray.push(sub);
      }
    }
  }
  if (textName === "about") showingSubMenu = false;

  if (showingSubMenu) {
    buildSubMenu(subArray);
    subMenuE1.style.top = "100%";
  } else {
    showingSubMenu = false;
    subMenuE1.style.top = "0";
  }
  //5.7

  function buildSubMenu(subArray) {
    subMenuE1.textContent = "";
    for (let item of subArray) {
      let aElement = document.createElement("a");
      aElement.setAttribute("href", item.href);
      aElement.textContent = item.text;
      subMenuE1.appendChild(aElement);
    }
  }
});
// 6.0(Maybe, untested)
const onSubMenuClick = (event) => {
  // 6.0
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return undefined;
  }
  console.log(event.target.textContent);
  // 6.1
  showingSubMenu = false;
  subMenuE1.style.top = 0;
  // 6.2
  for (const link of topMenuLinks) {
    link.classList.remove("active");
  }
  // 6.3
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  // 6.4
};

subMenuE1.addEventListener("click", onSubMenuClick);
