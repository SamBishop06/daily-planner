// Function to display current date and time
function displayCurrentTime() {
    var displayTime = document.querySelector("#currentDay");
    var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
    displayTime.textContent = currentTime;
}

  // Function to handle saving user input to local storage
function saveInputToLocal() {
    $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").replace("hour-", "");
    localStorage.setItem("hour-" + time, text);
    });
}

  // Function to track hours and apply appropriate background classes
function trackHours() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).removeClass("past").addClass("present");
    } else {
    $(this).removeClass("past present").addClass("future");
    }
    });
}

  // Function to retrieve and display data from local storage
function displayStoredText() {
    $(".time-block").each(function () {
    var blockHour = $(this).attr("id").replace("hour-", "");
    $(this).children(".description").val(localStorage.getItem("hour-" + blockHour));
    });
}

  // Main function to run when document is ready
$(document).ready(function () {
    displayCurrentTime();
    saveInputToLocal();
    trackHours();
    displayStoredText();
});
