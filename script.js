var dateDisplayEl = $('#currentDay');
var scheduleDisplayEl = $('.container-lg');
var hourPastEl = $('#hour-past');
var hourPresentEl = $('#hour-present');
var hourFutureEl = $('#hour-future');
var descriptionEl = $('.description');
var hourEl = $('.hour');

var officeHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function displayDate() {
  var rightNow = dayjs().format('MMMM DD, YYYY hh:mm a');
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

function checkTime() {
$(".time-block").each(function(index,element){
  var rightNowHour = dayjs().hour();
  console.log($(this).attr("id").split("-")[1]);
  var blockHour=$(this).attr("id").split("-")[1];
 if (rightNowHour < blockHour) {
  $(this).addClass("future")
 } else if (rightNowHour == blockHour) {
  $(this).addClass("present")
 }
  else {
    $(this).addClass("past")
  }
 })
}

$(".saveBtn").on("click",function(){
var inputSchedule = $(this).prev(".description").val();
console.log($(this));
var inputId = $(this).parent().attr('id');

console.log(inputSchedule);
console.log(inputId);
localStorage.setItem(inputId,inputSchedule);
})


//  Add code to display the current date in the header of the page.

checkTime();
displayDate();
