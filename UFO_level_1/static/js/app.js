
var sightings = data




var button = d3.select("#filter-btn");

var form = d3.select("#filters");

button.on("click", runEnter);

form.on("submit", runEnter);

var tbody = d3.select("tbody");

//

function runEnter(){

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");


    console.log(inputValue)

    var filteredData = sightings.filter(sightings => sightings.datetime === inputValue);

    console.log(filteredData);


    filteredData.forEach(function(alienReport) {

        var row = tbody.append("tr");

        Object.entries(alienReport).forEach(function([key, value]) {
            console.log(key, value);
            
            var cell = row.append("td");
            cell.text(value);

            });


        });

      };
