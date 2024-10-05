const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');

const toNext = document.getElementById('to-next');
const toFinish = document.getElementById('to-finish');

const divContainer = document.getElementById('div-container');

let number;
let num;
let num1;

toNext.addEventListener('click', function () {
    const opt1 = option1.value;
    const opt2 = option2.value;    

    if (opt1) {
        num += 1;
    }
    else if (opt2) {
        num += 0;
    }

    option1.value = '';
    option2.value = '';
})

toFinish.addEventListener('click', () => {
    const opt3 = option3.value;
    const opt4 = option4.value;

    if (opt4) {
        num1 += 1;
    }
    else if (opt3) {
        num1 += 0;
    }

    number = num + num1;

    option3.value = '';
    option4.value = '';

    const div = document.createElement('div');
    div.innerHTML = `Result: <span>${number}</span> correct answers to 2 questions.`;
    divContainer.appendChild(div);
    div.className = 'content';
})