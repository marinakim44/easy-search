class Searchbox {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Search...";
    this.container.appendChild(this.input);
    // this.input.onchange = (e) => console.log(e.target);
  }
}

// module.exports = Searchbox;

const searchbox = new Searchbox("searchbox-container");
console.log(searchbox.onchange);
// from project root folder run the following command to compile to older ES
// npx babel src/searchbox.js --out-file dist/searchbox.js
