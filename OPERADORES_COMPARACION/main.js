const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operadorSelect = document.getElementById("operador");
const resultadoInput = document.getElementById("resultado");
const botonCalcular = document.getElementById("calcular");

botonCalcular.addEventListener("click", e => {
    e.preventDefault();

    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    let operador = operadorSelect.value;

    let resultado;

    switch (operador) {
        case "<":
            resultado = num1 < num2;
            break;
        case "<=":
            resultado = num1 <= num2;
            break;
        case ">":
            resultado = num1 > num2;
            break;
        case ">=":
            resultado = num1 >= num2;
            break;
        case "==":
            resultado = num1 == num2;
            break;
        case "!=":
            resultado = num1 != num2;
            break; 
    }

    resultadoInput.value = resultado;
});
