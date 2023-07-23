// NAME & contact delivery section TO REFRESH
const nameInput = document.getElementById('namee');
const nameWarning = document.getElementById('nameWarning');
const contactInput = document.getElementById('contactt');
const contactWarning = document.getElementById('contactWarning');

function handleNameInput() {
    const value = nameInput.value;
    const lettersOnly = /^[A-Za-z]+$/.test(value);
    if (!lettersOnly) {
        nameWarning.classList.remove('d-none');
        nameInput.value = '';
    } else {
        nameWarning.classList.add('d-none');
    }
}

function handleContactInput() {
    const value = contactInput.value;
    const numbersOnly = /^\d*$/.test(value);
    if (!numbersOnly) {
        contactWarning.classList.remove('d-none');
        contactInput.value = '';
    } else {
        contactWarning.classList.add('d-none');
    }
}

nameInput.addEventListener('input', handleNameInput);
contactInput.addEventListener('input', handleContactInput);