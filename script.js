$(document).ready(function() {
  let containerDiv = $("#container");
  let timeValues = [
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
  //FOR Loop that goes through our array of times and creates a formatted row for each one in the container
  //
  for (let i = 0; i < timeValues.length; i++) {
    let timeRow = $("<div>");
    let timeAreaDiv = $("<div>");
    let textBoxDiv = $("<div>");
    let textarea = $("<textarea>");
    let buttonDiv = $("<div>");
    let saveBtn = $("<button>");

    //adding classes to the elements to style them with bootstrap
    timeRow.addClass("row no-gutters");
    timeAreaDiv.addClass("hour col-2 d-flex align-items-center");
    timeAreaDiv.html(`<p>${timeValues[i].time} ${timeValues[i].status}</p>`);
    textBoxDiv.addClass("col-9 past");
    textBoxDiv.attr("timeValue", timeValues[i].time);
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
  //Function to get and display the time in the head
  //
});
