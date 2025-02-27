/**
 * Personal Website
 *      Author:         Owen Rogers
 *      Date Created:   17 April 2024
 *      Last Modified:  26 February 2025
 */

// Execute when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get radio buttons for each reason for contact
  var questionRadio = document.getElementById("question");
  var commentRadio = document.getElementById("comment");
  var hiringRadio = document.getElementById("hiring");

  // Get hiring options div
  var hiringOptions = document.getElementById("hiring-options");

  // Get hiring options inputs
  var hourlyRate = document.getElementById("hourly-rate");
  var scheduleMeeting = document.getElementById("schedule-meeting");

  // Hide hiring options by default
  hiringOptions.style.display = "none";

  // Add event listener to radio buttons for toggling the hiring options
  questionRadio.addEventListener("change", toggleHiringOptions);
  commentRadio.addEventListener("change", toggleHiringOptions);
  hiringRadio.addEventListener("change", toggleHiringOptions);

  // Toggle display and required status of bonus options based on user selection
  function toggleHiringOptions() {
    // Toggle element attribute - Code reference: https://stackoverflow.com/questions/29036718/javascript-toggle-html5-required-attribute-based-on-form-selection
    if (hiringRadio.checked) {
      hiringOptions.style.display = "block";
      hourlyRate.setAttribute("required", "required");
      scheduleMeeting.setAttribute("required", "required");
    } else {
      hiringOptions.style.display = "none";
      hourlyRate.removeAttribute("required");
      scheduleMeeting.removeAttribute("required");
    }
  }
});
