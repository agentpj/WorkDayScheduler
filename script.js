var dateDisplayEl = $('#currentDay');
var officeHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// this is to display the title with the day, date and time
function displayDate() {
  var rightNow = dayjs().format('dddd, MMMM DD, YYYY hh:mm a');
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
  return schedules;
}

// this sets the class for the block to display the time depending on current time
// depending on class, block will display, grey, or red or green
function checkTime() {
$(".time-block").each(function(index,element){
  var rightNowHour = dayjs().hour();
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

// event for Saving the schedule in Local Storage
$(".saveBtn").on("click",function(){
var inputSchedule = $(this).prev(".description").val().trim();
var inputId = $(this).parent().attr('id');

var newSchedule = {
  id: inputId,
  scheduleEvent: inputSchedule, 
};
localStorage.setItem("schedules",JSON.stringify(newSchedule));
})


//  Add code to display the current date in the header of the page.
displayDate();
readScheduleDataFromStorage();
checkTime();