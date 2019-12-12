$(document).ready(function() {
  var containerDiv = $("#container");
  var timeValues = [
    { time: 9, status: "AM", mil: 09 },
    { time: 10, status: "AM", mil: 10 },
    { time: 11, status: "AM", mil: 11 },
    { time: 12, status: "PM", mil: 12 },
    { time: 1, status: "PM", mil: 13 },
    { time: 2, status: "PM", mil: 14 },
    { time: 3, status: "PM", mil: 15 },
    { time: 4, status: "PM", mil: 16 },
    { time: 5, status: "PM", mil: 17 }
  ];
  //
  //Code to get and display the day in the head
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
    timeAreaDiv.html(`<p>${timeValues[i].time} ${timeValues[i].status}</p>`);
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

  var colorDiv = $(".col-9");
  console.log(colorDiv);
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
});
