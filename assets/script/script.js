// galobal variabel declarations
var dayLabel = $("#currentDay");
var saveBtn = $(".saveBtn");

$(function () {
  // local variable declations
  var currentHour = dayjs().hour();
  var timeBlock = $(".time-block");
  timeBlock.each(function () {
    var idValue = $(this).attr("id")
    // if the current hour is less than the number of each time block id, the past color will be applied from css class
    if (idValue < currentHour) {
      $(this).children(".description").attr("class", "col col-md-10 description past")
      // else if the current hour is greater than the number of each time block id, the furture color will be applied from css class
    } else if (idValue > currentHour) {
      $(this).children(".description").attr("class", "col col-md-10 description future")
      // else (both of the above conditions are not met to the number of each time block id) the present color will be applied from css class
    } else {
      $(this).children(".description").attr("class", "col col-md-10 description present")
    }
    
  })

  // adds a click event listener 
  saveBtn.on("click", function () {
    // to save user input text into local storage and keep it in the text area even when the page is refreshed.
    var description = $(this).siblings(".description").val().replace(hour)
    var hour = $(this).parent().attr("id")
    localStorage.setItem(hour, JSON.stringify(description))
  })

  // this for loop makes sure that the above event applies to all of the time blocks from 9am - 5pm
  for (var i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
  }
 
  // date and time format using dayjs to display in the header of the page
  dayLabel.text(dayjs().format('ddd, MMMM DD, YYYY [at] hh:mm a'))
  
});



