import 'regenerator-runtime/runtime';

function ResultsUpdate(results) {
    //  Create local variables
    let listContainer = document.getElementById('results');
    let listData = results;
    let listElement = document.createElement('ul');
    let listItem;            

    //  Create HTML framework to receive content
    listContainer.appendChild(listElement);

    //  Loop over alyienAPI object to fill results field
    for (let [key, value] of Object.entries(listData)) {
        console.log(`${key}: ${value}`);
      
        listItem = document.createElement('li');
        listItem.innerHTML = (`${key}: ${value}`);
        listElement.appendChild(listItem);
    }
    console.log('uiUpdate complete!');
}

export { ResultsUpdate };
