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
    let timeArea = $("<div>");
    let textBoxArea = $("<textarea>");
    let saveBtn = $("<button>");
    timeArea.addClass("hour");
    timeArea.text(timeValues[i]);
    timeRow.addClass("row");
    saveBtn.addClass("saveBtn");
    saveBtn.text("Save");

    containerDiv.append(timeRow);
    timeRow.append(timeArea, textBoxArea, saveBtn);
  }
});
