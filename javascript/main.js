// Function to handle button clicks.
function buttonClick(buttonId) {
  // Variable is created called 'dropdowns' which becomes a list that contains
  // all of the elements with the class of 'dropdown-contents' this is then used
  // to iterate throug the menus
  var dropdowns = document.getElementsByClassName('dropdown-contents')

  // the Variable clickedDropdown finds the relevant dropdown id by combining the id of
  // dropdownList and combining it with the buttonId that gets pass through the function
  var clickedDropdown = document.getElementById('dropdownList' + buttonId)

  // This loops through the list stored in the dropdowns variable until the it reaches
  // the end of the list
  for (var i = 0; i < dropdowns.length; i++) {
    // this line updates the dropdowns variable to equal the entry it is currently on
    var dropdown = dropdowns[i]

    // This section checks to make sure that the loop doesn't process itself which
    // stops it from closing. It also check to see if the current entry has the class of
    // 'show' added to it.
    // both conditions need to be true for the dropdown to close (remove show class)
    if (dropdown !== clickedDropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show')
    }
  }

  // This line toggles the clicked dropdown's visibility
  clickedDropdown.classList.toggle('show')
}

// This function closes the dropdowns when clicked anywhere else on the screen
// aside from itself
window.onclick = function (event) {
  // this section checks to see that the location that was clicked is NOT inside an
  // element with the class dropdown-menu
  // it also checks to see if the clicked element contains the class drop-button
  // the ! at the beginning flips the results so if somewhere on the screen HAS the
  // class of drop-button the it will actually return false and then if it DOES NOT
  // have the class then it will return true. This is to stop the dropdown closing
  // when it's being clicked on.
  if (
    !event.target.closest('.dropdown-menu') &&
    !event.target.matches('.drop-button')
  ) {
    // if both conditions above are true then this loop triggers which is the same as
    // the loop up further
    var dropdowns = document.getElementsByClassName('dropdown-contents')
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
