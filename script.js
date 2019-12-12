$(document).ready(function() {
  var containerDiv = $("#container");
  //Set an array of objects to track time on rows.  Time is used for display, mil is used for logic against the current hour
  var timeValues = [
    { time: "9AM", mil: 09 },
    { time: "10AM", mil: 10 },
    { time: "11AM", mil: 11 },
    { time: "12PM", mil: 12 },
    { time: "1PM", mil: 13 },
    { time: "2PM", mil: 14 },
    { time: "3PM", mil: 15 },
    { time: "4PM", mil: 16 },
    { time: "5PM", mil: 17 }
  ];
  //
  //Code to get and display the day in the head and set the current Hour as an int
  //
  var currentTime = moment().format("MMMM Do YYYY");
  $("#currentDay").text(currentTime);

  var currentHour = parseInt(moment().format("H"));
  //var currentHour = 12;
  console.log(currentHour);

  //
  //FOR Loop that goes through our array of times and creates a formatted row for each one in the container
  //
  for (let i = 0; i < timeValues.length; i++) {
    var timeRow = $("<div>");
    var timeAreaDiv = $("<div>");
    var textBoxDiv = $("<div>");
    var textarea = $("<textarea>");
    var buttonDiv = $("<div>");
    var saveBtn = $("<button>");

    //adding classes to the elements to style them with bootstrap
    timeRow.addClass("row no-gutters");
    timeAreaDiv.addClass("hour col-2 d-flex align-items-center");
    timeAreaDiv.html(`<p>${timeValues[i].time}</p>`);
    textBoxDiv.addClass("col-9");
    textBoxDiv.attr("value", timeValues[i].mil);
    buttonDiv.addClass("col-1");
    saveBtn.addClass("saveBtn");
    saveBtn.text("Save");
    //appending the rows to the container, and then appending the column divs to the row
    containerDiv.append(timeRow);
    timeRow.append(timeAreaDiv, textBoxDiv, buttonDiv);
    textBoxDiv.append(textarea);
    buttonDiv.append(saveBtn);
  }
  //
  //Logic to set the background of the rows based on their relation to the current time
  //
  var colorDiv = $(".col-9");
  for (let j = 0; j < colorDiv.length; j++) {
    var currentDiv = $(colorDiv[j]);
    if (currentDiv.attr("value") > currentHour) {
      currentDiv.addClass("future");
    } else if (currentDiv.attr("value") < currentHour) {
      currentDiv.addClass("past");
    } else {
      currentDiv.addClass("present");
    }
  }
  //
  //Add event listener on row.button to run the saveText function
  //
  var timeRow = $(".row");
  timeRow.on("click", "button", saveText);

  //
  //Function to Save whats in the textarea in a row to local memory
  //and display said text as the contents of the textarea
  //
  function saveText() {}
});
