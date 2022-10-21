class Calculator {

    static sum(arg1, arg2) {
        return arg1 + arg2;
    }

    static diff(arg1, arg2) {
        return arg1 - arg2;
    }

    static mult(arg1, arg2) {
        return arg1 * arg2;
    }

    static divide(arg1, arg2) {
        if (arg2 === "0") {
            alert('Нельзя делить на 0');
            return;
        }
        return arg1 / arg2;
    }
}

let result = document.getElementById('result');

function sum() {
    const a = +document.getElementById('num1').value;
    const b = +document.getElementById('num2').value;
    result.textContent = Calculator.sum(a, b);
}

function diff() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    result.textContent = Calculator.diff(a, b);
}

function mult() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    result.textContent = Calculator.mult(a, b);
}

function div() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    result.textContent = Calculator.divide(a, b);
}

