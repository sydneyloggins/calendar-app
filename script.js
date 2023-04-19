// Ensures code isn't run until the borwser finished rendering elements in HTML
$(document).ready(function() {
  console.log("Ready to go!");
});

//Displays current time using Moment.js at top of page
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var displayDate = document.getElementById('currentDay');
displayDate.innerHTML = currentTime;
var currentHour = moment().format('HH');

//function that targets the time block and uses if/else if statements to assign 'future', 'past', and 'present' classes depending on the current time. 
$('.time-block').each(function () {
  var timeBlock = $(this).attr('id').split('-')[1];

  if (currentHour == timeBlock) {
    $(this).addClass('present');
    $(this).children('.discription').addClass('present');
  } else if (currentHour < timeBlock) {
    $(this).removeClass('present');
    $(this).addClass('future');
  } else if (currentHour > timeBlock) {
    $(this).removeClass('future');
    $(this).addClass('past');
  }

});

//save button function to save inputs to local storage
$('.saveBtn').click(function (event) {
  event.preventDefault();
  var input = $(this).siblings('.time-area').val();
  var time = $(this).parent().attr('id').split('-')[1];
  localStorage.setItem(time, input);
})

//Adds an alert when user saves an event to let user know it is saved to local storage
$('.saveBtn').click(function () {
  alert('Event saved to local storage');
});

//Saves the value entered into local storage separated by hour.
$("#hour-09 .time-area").val(localStorage.getItem("9"));
$("#hour-10 .time-area").val(localStorage.getItem("10"));
$("#hour-11 .time-area").val(localStorage.getItem("11"));
$("#hour-12 .time-area").val(localStorage.getItem("12"));
$("#hour-13 .time-area").val(localStorage.getItem("13"));
$("#hour-14 .time-area").val(localStorage.getItem("14"));
$("#hour-15 .time-area").val(localStorage.getItem("15"));
$("#hour-16 .time-area").val(localStorage.getItem("16"));
$("#hour-17 .time-area").val(localStorage.getItem("17"));

