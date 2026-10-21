const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSumar = document.getElementById("btnSumar");
const resultado = document.getElementById("resul");

btnSumar.addEventListener("click", () => {
    const total = Number(num1.value) + Number(num2.value);
    resultado.textContent = `Resultado: ${total}`;
});