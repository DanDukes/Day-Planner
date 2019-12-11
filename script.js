$(document).ready(function() {
  let containerDiv = $("#container");
  let timeValues = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
  ];
  for (let i = 0; i < timeValues.length; i++) {
    let timeRow = $("<div>");
    let timeAreaDiv = $("<div>");
    let textBoxDiv = $("<div>");
    let textarea = $("<textarea>");
    let buttonDiv = $("<div>");
    let saveBtn = $("<button>");
    timeRow.addClass("row no-gutters");

    timeAreaDiv.addClass("hour col-1");
    timeAreaDiv.text(timeValues[i]);

    textBoxDiv.addClass("col-10");

    buttonDiv.addClass("col-1");
    saveBtn.addClass("saveBtn");
    saveBtn.text("Save");

    containerDiv.append(timeRow);
    timeRow.append(timeAreaDiv, textBoxDiv, buttonDiv);
    textBoxDiv.append(textarea);
    buttonDiv.append(saveBtn);
  }
});
