const inputField = document.getElementById("squareSide")
const countButton = document.getElementById("countButton")

inputField.addEventListener('input', function() {
    const inputValue = inputField.ariaValueMax.trim()
    if(validateInput(inputValue)) {
        countButton.disabled = false
    } else {
         countButton.disabled = true
         }
})