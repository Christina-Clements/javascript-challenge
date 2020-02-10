var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#button");

button.on("change", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    d3.select(".filter list-group-item").text(inputValue);
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    var dates = filteredData.map(date => date.datetime);
    var list = d3.select(".table table-striped");
    list.html("");
    list.append("li").text(`Date: ${datetime}`);
    list.append("li").text(`City: ${city}`);
    list.append("li").text(`State: ${state}`);
    list.append("li").text(`Country: ${country}`);
    list.append("li").text(`Shape: ${shape}`);
    list.append("li").text(`Duration in Minutes: ${durationMinutes}`);
    list.append("li").text(`Comments: ${comments}`);
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