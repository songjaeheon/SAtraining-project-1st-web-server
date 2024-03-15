document.addEventListener("DOMContentLoaded", function() {
    const tableContainer = document.getElementById("#post-table");
  
    fetch("http://footballmania.com/post/all")
      .then(response => response.json())
      .then(data => {
        const table = document.createElement("table");
        table.style.borderCollapse = "collapse"; // Set border collapse for individual cell borders
  
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
  
        // Create table header row
        const headerRow = document.createElement("tr");
        headerRow.appendChild(createTHCell("ID"));
        headerRow.appendChild(createTHCell("UUID"));
        headerRow.appendChild(createTHCell("Title"));
        headerRow.appendChild(createTHCell("Text"));
        headerRow.appendChild(createTHCell("User"));
        thead.appendChild(headerRow);
        table.appendChild(thead);
  
        // Add data rows from JSON response
        data.forEach(item => {
          const row = document.createElement("tr");
          row.appendChild(createTDCell(item.id));
          row.appendChild(createTDCell(item.uuid));
          row.appendChild(createTDCell(item.title));
          row.appendChild(createTDCell(item.text));
          row.appendChild(createTDCell(item.user));
          tbody.appendChild(row);
        });
        table.appendChild(tbody);
  
        // Add the table to the container
        tableContainer.appendChild(table);
      })
      .catch(error => {
        console.error("Error:", error);
        // Handle any errors that occur during the request
      });
  });
  
  function createTHCell(text) {
    const cell = document.createElement("th");
    cell.textContent = text;
    cell.style.border = "1px solid black"; // Set individual cell border
    return cell;
  }
  
  function createTDCell(text) {
    const cell = document.createElement("td");
    cell.textContent = text;
    cell.style.border = "1px solid black"; // Set individual cell border
    return cell;
  }