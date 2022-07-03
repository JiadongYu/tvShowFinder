// Select the table body
const tableBody = document.querySelector(".shows");

// Add event listener to the search bar
const searchBar = document.querySelector(".search");
searchBar.addEventListener("input", (e) => {
    e.preventDefault();
    fetchShows();
});


// Implement the function for the event listener

async function fetchShows() {
    // prevent form from being submitted
    // Clear all the previous table rows
    tableBody.innerHTML = "";
    // Retrieve the currrent search item
    let searchItem = searchBar.value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchItem}`);
    const data = await response.json();
    // Now we have obtained the json object, let us loop through the json object and obtain the name, image and summary
    for (let show of data) {
        let showName = show["show"]["name"];
        let showImage = show["show"]["image"]["medium"];
        let showSummary = show["show"]["summary"];
        // Add these info to the table
        let tableRow = document.createElement("tr") // Create a new row in the table
        // Create a new image element and set its source 
        let imageData = document.createElement("td");
        let imageCell = document.createElement("img");
        imageCell.setAttribute("src", showImage);
        imageData.append(imageCell);
        // Create table data for the show name
        let nameData = document.createElement("td");
        let nameCell = showName;
        nameData.append(nameCell);
        // Create table data for the show summary
        let summaryData = document.createElement("td");
        let summaryCell = showSummary;
        summaryData.innerHTML = showSummary;
        // Add the three columns to the newly created table row
        tableRow.append(imageData, nameData, summaryData);
        tableBody.appendChild(tableRow);


    }
}