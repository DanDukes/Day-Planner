$(document).ready(function() {
  var containerDiv = $("#container");
  var timeValues = [
    { time: 9, status: "AM" },
    { time: 10, status: "AM" },
    { time: 11, status: "AM" },
    { time: 12, status: "PM" },
    { time: 1, status: "PM" },
    { time: 2, status: "PM" },
    { time: 3, status: "PM" },
    { time: 4, status: "PM" },
    { time: 5, status: "PM" }
  ];
  //
  //Code to get and display the day in the head
  //
  var currentTime = moment().format("MMMM Do YYYY");
  $("#currentDay").text(currentTime);

  var currentHour = moment().format("h");
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
    timeAreaDiv.html(`<p>${timeValues[i].time} ${timeValues[i].status}</p>`);
    textBoxDiv.addClass("col-9 future");
    textBoxDiv.attr("value", timeValues[i].time);
    buttonDiv.addClass("col-1");
    saveBtn.addClass("saveBtn");
    saveBtn.text("Save");
    //appending the rows to the container, and then appending the column divs to the row
    containerDiv.append(timeRow);
    timeRow.append(timeAreaDiv, textBoxDiv, buttonDiv);
    textBoxDiv.append(textarea);
    buttonDiv.append(saveBtn);
  }

  var colorDiv = $(".col-9");
  console.log(colorDiv);
  for (let j = 0; j < colorDiv.length; j++) {
    if (colorDiv[j].val() > currentHour) {
      colorDiv[j].addClass("future");
    } else if (colorDiv[j].val() < currentHour) {
      colorDiv[j].addClass("past");
    } else {
      colorDiv[j].addClass("present");
    }
  }
});
