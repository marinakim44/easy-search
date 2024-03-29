class Searchbox {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Search...";
    this.container.appendChild(this.input);
  }
}

module.exports = Searchbox;
