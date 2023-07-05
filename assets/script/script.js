var dayLabel = $("#currentDay")

$(function () {
  dayLabel.text(dayjs().format('ddd MMMM D, YYYY'))

  var currentHour = dayjs().hour()
  var timeBlock = $(".time-block")
  timeBlock.each(function () {
    var idValue = $(this).attr("id")
    if (idValue < currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else if (idValue > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  })

  

});
