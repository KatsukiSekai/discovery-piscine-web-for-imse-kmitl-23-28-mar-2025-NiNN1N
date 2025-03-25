function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operator = document.getElementById("operator").value;

    if (num1 === "" || num2 === "" || num1 < 0 || num2 < 0) {
        alert("Error :(");
        return;
    }

    const a = parseInt(num1);
    const b = parseInt(num2);
    let result;

    if ((operator === "/" || operator === "%") && b === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        case "%": result = a % b; break;
    }

    alert("Result: " + result);
    console.log("Result:", result);
}

setInterval(() => {
    alert("Please, use me...");
}, 30000);
