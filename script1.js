// script1.js

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
                string = '';
            }
        } else if (e.target.textContent === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.textContent === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.textContent;
            input.value = string;
        }
    });
});
