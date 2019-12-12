$(document).ready(function() {
  let containerDiv = $("#container");
  let timeValues = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
  ];
  for (let i = 0; i < timeValues.length; i++) {
    let timeRow = $("<div>");
    let timeAreaDiv = $("<div>");
    let textBoxDiv = $("<div>");
    let textarea = $("<textarea>");
    let buttonDiv = $("<div>");
    let saveBtn = $("<button>");
    timeRow.addClass("row no-gutters");

    timeAreaDiv.addClass("hour col-2 d-flex align-items-center");
    timeAreaDiv.html(`<p>${timeValues[i]}</p>`);

    textBoxDiv.addClass("col-9 past");

    buttonDiv.addClass("col-1");
    saveBtn.addClass("saveBtn");
    saveBtn.text("Save");

    containerDiv.append(timeRow);
    timeRow.append(timeAreaDiv, textBoxDiv, buttonDiv);
    textBoxDiv.append(textarea);
    buttonDiv.append(saveBtn);
  }
});
