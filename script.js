var dateDisplayEl = $('#currentDay');
var scheduleDisplayEl = $('.container-lg');
var hourPastEl = $('#hour-past');
var hourPresentEl = $('#hour-present');
var hourFutureEl = $('#hour-future');
var rightNowHour = 0;
var descriptionEl = $('.description');
var hourEl = $('.hour');

var officeHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function displayDate() {
  var rightNow = dayjs().format('MMMM DD, YYYY hh:mm a');
  rightNowHour = dayjs().hour();

  console.log(rightNowHour);
  dateDisplayEl.text(rightNow);
}

// gets Schedule data from local storage and displays it
function readScheduleDataFromStorage() {
  var schedules = localStorage.getItem('schedules');
  if (schedules) {
    schedules = JSON.parse(schedules);
  }
  else {
    schedules = [];
  }
  console.log("readScheduleData " + schedules);
  return schedules;
}

// this loads the container with the schedule blocks
function loadScheduleData() {
  scheduleDisplayEl.empty();
  schedules = [];
  var timeNow = rightNowHour;
  
  var schedules = readScheduleDataFromStorage();

  for (var i = 0; i < officeHours.length; i++) {

    if (timeNow < officeHours[i]) {
     loadPast();
    } else {
      if (timeNow == officeHours[i]) {
        loadPresent();
      } else {
        if (timeNow > officeHours[i]) {
          loadFuture();
        }
      }
    }
  }
};

function loadPast(schedules, i) {
  var descriptionEl = "";
  if (schedules) {
    var schedule = schedules[i];
    hourEl.value(schedule.hour);
    if (hourEl == officeHours[i]) {
      descriptionEl.text(schedule.description);
    }
  }
  hourPastEl = officeHours[i];
  
  
};

function loadPresent(schedules, i) {
  var descriptionEl = "";
  if (schedules) {
    var schedule = schedules[i];
    hourEl.value(schedule.hour);
    if (hourEl == officeHours[i]) {
      descriptionEl.text(schedule.description);
    }
  }
  hourPresentEl = officeHours[i];

  
};

function loadFuture(schedules, i) {
  var descriptionEl = "";
 
  
};

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.


displayDate();
loadScheduleData();