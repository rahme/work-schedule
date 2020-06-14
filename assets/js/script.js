//Adding Current Date and Time to Banner
$("#currentDay").text(moment().format("MMMM Do YYYY"));

$(document).ready(function () {
  timeColor();
  schedule();
});

//Function to Make the Hour Cell Change Color if Past, Present, Future
function timeColor() {
  let time = moment().hour();
  console.log(time);

  for (i = 0; i < 24; i++) {
    let idStr = "#" + i;
    //console.log(idStr)

    if (time < i) {
      $(idStr).addClass("future");
    } else if (time === i) {
      $(idStr).addClass("present");
    } else if (time > i) {
      $(idStr).addClass("past");
    }
  }
}

//EventListener to Get Save Button Press and Trigger Function to Save Test in Text Area
$(".saveBtn").click(function () {
  //Get Text From the Discription Sibiling Node of the Save Button
  //Use a this function to know which button is being pressed and which sibiling text area to look at
  let description = $(this).siblings(".description").val();
  description = description.trim();
  console.log(description);
  //Then Get Which Corresponding Hour That Button is Being Pressed For
  let theHour = $(this).siblings(".hour").text();
  theHour = theHour.trim();
  console.log(theHour);
  //Save To a Local Storage
  localStorage.setItem(theHour, description);
  console.log(localStorage);
  console.log(localStorage.getItem("3 PM"));
});

//Create a Function that Writes Whatever is Saved in the Localstorage Each Time the Page is Reloaded
function schedule() {
  let y = 1;
  let x = 13;

  console.log(localStorage);

  $("#0").val(localStorage.getItem("12 AM"));
  $("#12").val(localStorage.getItem("12 PM"));

  for (i = 1; i < 12; i++) {
    let clock = i + " AM";
    //console.log(clock)

    let entry = localStorage.getItem(clock);

    let amID = "#" + y;
    //console.log(amID)
    $(amID).val(entry);
    y++;
  }

  for (i = 1; i < 12; i++) {
    let clock = i + " PM";
    //console.log(clock)

    let entry = localStorage.getItem(clock);

    let pmID = "#" + x;
    //console.log(pmID)
    $(pmID).val(entry);
    x++;
  }
}
