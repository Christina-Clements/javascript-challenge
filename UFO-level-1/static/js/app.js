var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var filteredData = []


button.on("change", function() {
    var inputElement = d3;
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    d3.select(".filter list-group-item").text(inputValue);
    var filteredData = tableData.filter(tableData => tableData.Date === inputValue);
    console.log(filteredData);
    var filteredData =filteredData.append()
});

data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");

    Object.entries(tableData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });

});