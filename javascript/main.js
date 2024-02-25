// Function to handle button click
function buttonClick(buttonId) {
  // Close all dropdowns
  var dropdowns = document.getElementsByClassName('dropdown-contents')
  for (var i = 0; i < dropdowns.length; i++) {
    var dropdown = dropdowns[i]
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show')
    }
  }

  // Toggle the dropdown associated with the clicked button
  var dropdownList = document.getElementById('dropdownList' + buttonId)
  dropdownList.classList.toggle('show')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.drop-button')) {
    var dropdowns = document.getElementsByClassName('dropdown-contents')
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
