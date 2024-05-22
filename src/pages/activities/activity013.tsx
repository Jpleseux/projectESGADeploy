import { useState } from "react";

function Activity013() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");

    const handleNumChange = (e) => {
        const { name, value } = e.target;
        const floatRegex = /^[0-9]*[.,]?[0-9]*$/;
        if (floatRegex.test(value)) {
            if (name === "num1") setNum1(value);
            if (name === "num2") setNum2(value);
        }
    };

    const handleOperationChange = (e) => {
        setOperation(e.target.value);
    };

    const calculate = () => {
        const number1 = parseFloat(num1.replace(",", "."));
        const number2 = parseFloat(num2.replace(",", "."));

        if (isNaN(number1) || isNaN(number2)) {
            setResult("Por favor, insira números válidos.");
            return;
        }

        let res;
        switch (operation) {
            case "add":
                res = number1 + number2;
                break;
            case "subtract":
                res = number1 - number2;
                break;
            case "multiply":
                res = number1 * number2;
                break;
            case "divide":
                res = number2 !== 0 ? number1 / number2 : "Divisão por zero não é permitida.";
                break;
            default:
                res = "Selecione uma operação válida.";
        }
        setResult(` ${res}`);
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 13</h1>
                <p>Calculadora</p>
                <p>O usuário deve escolher a operação e informar os números para a mesma.</p>
            </div>
            <div className="code-section">
                <h1>Calculadora</h1>
                <div className="code-snippet-ten">
                    <div className="input-group">
                        <input 
                            name="num1"
                            className="input m-4" 
                            type="text" 
                            placeholder="Primeiro número"
                            value={num1}
                            onChange={handleNumChange} 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            name="num2"
                            className="input m-4" 
                            type="text" 
                            placeholder="Segundo número"
                            value={num2}
                            onChange={handleNumChange} 
                        />
                    </div>
                    <div className="input-group m-4">
                        <select value={operation} onChange={handleOperationChange}>
                            <option value="">Selecione uma operação</option>
                            <option value="add">Adição</option>
                            <option value="subtract">Subtração</option>
                            <option value="multiply">Multiplicação</option>
                            <option value="divide">Divisão</option>
                        </select>
                    </div>
                    <div className="button-group">
                        <button className="button" onClick={calculate}>
                            Calcular
                        </button>
                    </div>
                    {result && <p className="m-4">Resultado: <b>{result}</b></p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código:</h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS, então algumas variáveis a mais foram adicionadas. Abaixo está o código em JavaScript original:</p>
                <pre className="code-snippet">
                    {`
function calculadora() {
    let num1, num2, operation;
    while (true) {
        let num1Input = prompt("Digite o primeiro número: ");
        num1Input = num1Input.replace(",", ".");
        num1 = parseFloat(num1Input);
        if (!isNaN(num1)) break;
        console.log("Por favor, insira um número válido para o primeiro número.");
    }
    while (true) {
        let num2Input = prompt("Digite o segundo número: ");
        num2Input = num2Input.replace(",", ".");
        num2 = parseFloat(num2Input);
        if (!isNaN(num2)) break;
        console.log("Por favor, insira um número válido para o segundo número.");
    }
    while (true) {
        operation = prompt("Digite a operação (add, subtract, multiply, divide): ").toLowerCase();
        if (["add", "subtract", "multiply", "divide"].includes(operation)) break;
        console.log("Por favor, selecione uma operação válida (add, subtract, multiply, divide).");
    }
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Divisão por zero não é permitida.";
            break;
        default:
            result = "Operação inválida.";
    }
    console.log(\`Resultado: \${result}\`);
}
calculadora();`}
                </pre>
            </div>
        </div>
    );
}

export default Activity013;
