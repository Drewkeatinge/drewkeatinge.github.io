// Function to handle when the button gets clicked
function buttonClick(buttonId) {
  // Creates a variable dropdownList which toggles the dropdown associated
  // with the clicked button by combining the dropdownList ID with the buttonId
  var dropdownList = document.getElementById('dropdownList' + buttonId)

  // This If statement checks if the dropdown is already visible via the class 'show'
  if (dropdownList.classList.contains('show')) {
    // If it's visible, hide it
    dropdownList.classList.remove('show')
  } else {
    // If it's not visible, show it
    dropdownList.classList.add('show')
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  // Check if the clicked element is not a dropdown button
  if (!event.target.matches('.drop-button')) {
    // Close all dropdowns
    var dropdowns = document.getElementsByClassName('dropdown-contents')
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
