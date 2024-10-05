const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');

const toNext = document.getElementById('to-next');
const toFinish = document.getElementById('to-finish');

const divContainer = document.getElementById('div-container');

let num = 0;

toNext.addEventListener('click', () => {

    if (option1.checked == true) {
        num += 1;
    }
    else if (option2.checked == true) {
        num += 0;
    }

    option1.value = '';
    option2.value = '';
})

toFinish.addEventListener('click', () => {

    if (option4.checked == true) {
        num += 1;
    }
    else if (option3.checked == true) {
        num += 0;
    }

    option3.value = '';
    option4.value = '';

    const div = document.createElement('div');
    div.innerHTML = `Result: <span>${num}</span> correct answers to 2 questions.`;
    divContainer.appendChild(div);
    div.className = 'content';
})