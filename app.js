import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

// We are looking for some drinks from this URL and what drinks we are looking for and here we have passed a default value of 'a' so that when the page is loaded completely then some default drinks show up. In this case we are looking for drinks that start with 'a'.
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
});
