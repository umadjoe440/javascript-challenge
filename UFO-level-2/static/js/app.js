// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// Select the filter button
var filter_button = d3.select("#filter-btn");


 // Use d3 to update each cell's text with
 // UFO sighting values (datetime, city, state, country...etc)
 data.forEach(function(ufoSighting) {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

filter_button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // Get the value property of the input element
  var inputDateValue = inputDate.property("value");
  var inputCityValue = inputCity.property("value");
  var inputStateValue = inputState.property("value");
  var inputCountryValue = inputCountry.property("value");
  var inputShapeValue = inputShape.property("value");

  console.log(inputDateValue);
  console.log(inputCityValue);
  console.log(inputStateValue);
  console.log(inputCountryValue);
  console.log(inputShapeValue);
  
  var filteredData = data;
  
  //Filter the Table Data Based on Populated Form Data
  if(inputDateValue){
    filteredData = filteredData.filter(sighting => sighting.datetime === inputDateValue);  
  }
  if(inputCityValue){
    filteredData = filteredData.filter(sighting => sighting.city === inputCityValue);  
  }
  if(inputStateValue){
    filteredData = filteredData.filter(sighting => sighting.state === inputStateValue);  
  }
  if(inputCountryValue){
    filteredData = filteredData.filter(sighting => sighting.country === inputCountryValue);  
  }   
  if(inputShapeValue){
    filteredData = filteredData.filter(sighting => sighting.shape === inputShapeValue);  
  }  
  // select table body and remove all rows
  d3.select("tbody").selectAll("tr").remove();
  
  // Use d3 to update each cell's text with
  // Filtered Rows
  filteredData.forEach(function(ufoSighting) {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


});
  