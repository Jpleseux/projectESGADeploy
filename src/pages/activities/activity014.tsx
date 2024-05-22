import { useState } from "react";

function Activity014() {
    const [cpf, setCpf] = useState("");
    const [result, setResult] = useState("");

    const handleCpfChange = (e) => {
        const { value } = e.target;
        const cleanedValue = value.replace(/\D/g, '');
        const formattedValue = applyCpfMask(cleanedValue);
        setCpf(formattedValue);
    };

    const applyCpfMask = (value) => {
        if (!value) return '';
        return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    };

    const calculate = () => {
        if (typeof cpf !== "string") return false;
        const input = cpf.replace(/[\s.-]*/gim, "");
        if (
          !input ||
          input.length != 11 ||
          input == "00000000000" ||
          input == "11111111111" ||
          input == "22222222222" ||
          input == "33333333333" ||
          input == "44444444444" ||
          input == "55555555555" ||
          input == "66666666666" ||
          input == "77777777777" ||
          input == "88888888888" ||
          input == "99999999999"
        ) {
          setResult("Inválido");
          return false;
        }
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) soma = soma + parseInt(input.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(input.substring(9, 10))) {
            setResult("Inválido");
            return false;
        }
        soma = 0;
        for (let i = 1; i <= 10; i++) soma = soma + parseInt(input.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(input.substring(10, 11))) {
            setResult("Inválido");
            return false;
        }
        setResult("Válido");
        return true; 
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 14</h1>
                <p>Validador CPF</p>
                <p>O usuário deve escolher o CPF e o código válida.</p>
            </div>
            <div className="code-section">
                <h1>Calculadora</h1>
                <div className="code-snippet-ten">
                    <div className="input-group">
                        <input 
                            name="cpf"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite o CPF"
                            value={cpf}
                            onChange={handleCpfChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button className="button" onClick={calculate}>
                            Calcular
                        </button>
                    </div>
                    {result && <p className="m-4">O CPF {cpf} é <b>{result}</b></p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código:</h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS, então algumas variáveis a mais foram adicionadas. Abaixo está o código em JavaScript original:</p>
                <pre className="code-snippet">
                    {`
function calculadora(cpf) {
    if (typeof cpf !== "string") return false;
    const input = cpf.replace(/[\s.-]*/gim, "");
    if (
      !input ||
      input.length != 11 ||
      input == "00000000000" ||
      input == "11111111111" ||
      input == "22222222222" ||
      input == "33333333333" ||
      input == "44444444444" ||
      input == "55555555555" ||
      input == "66666666666" ||
      input == "77777777777" ||
      input == "88888888888" ||
      input == "99999999999"
    ) {
      return false;
    }
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) soma = soma + parseInt(input.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(input.substring(9, 10))) {
        return false;
    }
    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(input.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(input.substring(10, 11))) {
        return false;
    }
    return true; 
}
const input = prompt("Digite o cpf: ")

if (!calculadora(input)) {
    console.log("CPF inválido")
} else {
    console.log("CPF válido");
}
`}
                </pre>
            </div>
        </div>
    );
}

export default Activity014;
