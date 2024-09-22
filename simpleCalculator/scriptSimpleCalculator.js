const calculate = document.getElementById("calculate");
function calculation(){
    const inputField = document.getElementById("inputField");
    const resultContainer = document.getElementById("resultContainer");
    const value = inputField.value;
    resultContainer.textContent = "Result: "+eval(value);

}
calculate.addEventListener("click",calculation);
