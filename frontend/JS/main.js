// NAME delivery section TO REFRESH
const nameInput = document.getElementById('namee');
const nameWarning = document.getElementById('nameWarning');

nameInput.addEventListener('input', function () {
    const value = nameInput.value;
    const lettersOnly = /^[A-Za-z]+$/.test(value); // Use /^[A-Za-z]+$/ to allow only letters
    if (!lettersOnly) {
        nameWarning.classList.remove('d-none');
        nameInput.value = ''; // Clear the input area if numbers are entered
    } else {
        nameWarning.classList.add('d-none');
    }
});
// contact delivery section TO REFRESH
const contactInput = document.getElementById('contactt');
const contactWarning = document.getElementById('contactWarning');

contactInput.addEventListener('input', function () {
    const value = contactInput.value;
    const numbersOnly = /^\d*$/.test(value); // Use /^\d*$/ to allow an empty string or only numbers
    if (!numbersOnly) {
        contactWarning.classList.remove('d-none');
        contactInput.value = ''; // Clear the input area if non-numeric characters are entered
    } else {
        contactWarning.classList.add('d-none');
    }
});;