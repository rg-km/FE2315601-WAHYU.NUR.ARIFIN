//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
    let input = document.getElementById('input');
    input.value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    // TODO: answer here
    let input = document.getElementById('input');
    if(operator == 'Del'){
        input.value = input.value.substring(0, input.value.length - 1);
    } else if(operator == 'AC'){
        input.value = '';
    } else {
        input.value += operator;
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    let input = document.getElementById('input');
    input.value = eval(input.value);
}