var dayLabel = $("#currentDay")
var saveBtn = $(".saveBtn")

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

  saveBtn.on("click", function () {
    var description = $(this).siblings(".description").val().replace(hour)
    var hour = $(this).parent().attr("id")

    localStorage.setItem(hour, JSON.stringify(description))
  })

  for (var i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
  }

});
