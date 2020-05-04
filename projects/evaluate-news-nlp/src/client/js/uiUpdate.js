function ResultsUpdate(results) {
    //  Create local variables
    let content = getElementById("results");
    let listData = results;
    let listContainer = document.createElement('div');
    let listHeader = document.createElement('h1');
    let listElement = document.createElement('ul');
    let numberOfListItems = listData.length;
    let listItem;
    let i;
    let headerContent = JSON.stringify(results.endpoint);             

    //  Create HTML framework to receive content
    content.appendChild(listContainer);
    listContainer.appendChild(listHeader);
    listHeader.innerHTML = headerContent;
    listContainer.appendChild(listElement);

    //  Loop over alyienAPI object to fill results field
    for (i = 0; i < numberOfListItems; ++i) {
        listItem = document.createElement('li');
        listItem.innerHTML = listData[i];
        listElement.appendChild(listItem);
    }
}

export { ResultsUpdate };
