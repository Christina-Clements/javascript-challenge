var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#button");


button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    d3.select("h1>span").text(inputValue);
    console.log(tableData);
    var filteredData = tableData.filter(tableData => tableData.Date === inputValue);
    console.log(filteredData);
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
