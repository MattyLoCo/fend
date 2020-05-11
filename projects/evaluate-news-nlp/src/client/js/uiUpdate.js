import "regenerator-runtime/runtime";

function ResultsUpdate(results) {
  //  Create local variables
  let listContainer = document.getElementById("results");
  let listData = results;
  let listElement = document.createElement("ul");
  let listItem;

  //  Create HTML framework to receive content
  listContainer.appendChild(listElement);

  //  Loop over alyienAPI object to fill results field
  for (let [key, value] of Object.entries(listData)) {
    console.log(`${key}: ${value}`);

    listItem = document.createElement("li");
    listItem.innerHTML = `${key}: ${value}`;
    listElement.appendChild(listItem);
  }

  //  Set 'text' value because it's not returning with API response
  function setText() {
    let liTags = document.getElementsByTagName("li");
    let searchText = "text: ";
    let innerText = document.getElementById("text").value;
    let found;

    for (let i = 0; i < liTags.length; i++) {
      if (liTags[i].textContent === searchText) {
        found = liTags[i];
        found.innerHTML = `text: ${innerText}`;
        break;
      }
    }
  }

  setText();

  console.log("uiUpdate complete!");
}

export { ResultsUpdate };
