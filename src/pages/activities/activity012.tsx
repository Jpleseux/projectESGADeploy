import { useState } from "react";

function Activity012() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("");

    const handleWeightChange = (e) => {
        const { value } = e.target;
        const floatRegex = /^[0-9]*[.,]?[0-9]*$/;
        if (floatRegex.test(value)) {
            setWeight(value);
        }
    };

    const handleHeightChange = (e) => {
        const { value } = e.target;
        const floatRegex = /^[0-9]*[.,]?[0-9]*$/;
        if (floatRegex.test(value)) {
            setHeight(value);
        }
    };

    const calculateIMC = () => {
        const weightFloat = parseFloat(weight.replace(",", "."));
        const heightFloat = parseFloat(height.replace(",", "."));

        if (isNaN(weightFloat) || isNaN(heightFloat) || heightFloat === 0) {
            setResult("Valores inválidos. Por favor, insira números válidos para peso e altura.");
            setStatus("");
            return;
        }

        const imc = weightFloat / (heightFloat * heightFloat);
        setResult(`Seu IMC é: ${imc.toFixed(2)}`);

        let imcStatus = "";
        if (imc <= 18.5) {
            imcStatus = "Você está abaixo do peso.";
        } else if (imc <= 24.9) {
            imcStatus = "Você está com peso normal.";
        } else if (imc <= 29.9) {
            imcStatus = "Você está com sobrepeso.";
        } else if (imc <= 34.9) {
            imcStatus = "Você está com obesidade Grau 1.";
        } else if (imc <= 39.9) {
            imcStatus = "Você está com obesidade Grau 2.";
        } else {
            imcStatus = "Você está com obesidade Grau 3 (ou obesidade Mórbida).";
        }
        setStatus(imcStatus);
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 12</h1>
                <p>Calcular o Índice de Massa Corporal (IMC)</p>
                <p>
                    O usuário deve informar o peso (em kg) e a altura (em metros).
                    <br />
                    O programa deve calcular o IMC utilizando a fórmula:
                    <br />
                    IMC = peso / (altura * altura)
                    <br />
                    O estado do usuário será exibido com base no valor do IMC.
                </p>
            </div>
            <div className="code-section">
                <h1>Cálculo do IMC</h1>
                <div className="code-snippet-ten">
                    <div className="input-group">
                        <input 
                            id="weightInput"
                            autoComplete="off" 
                            name="weight"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite seu peso (kg)"
                            value={weight}
                            onChange={handleWeightChange} 
                        />
                                                <input 
                            id="heightInput"
                            autoComplete="off" 
                            name="height"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite sua altura (m)"
                            value={height}
                            onChange={handleHeightChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button className="button" onClick={calculateIMC}>
                            Calcular IMC
                        </button>
                    </div>
                    {result && <p className="m-4">Resultado: <b>{result}</b></p>}
                    {status && <p className="m-4">Estado: <b>{status}</b></p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código:</h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS, então algumas variáveis a mais foram adicionadas. Abaixo está o código em JavaScript original:</p>
                <pre className="code-snippet">
                    {`
print("------------------------------")
print("Calculadora de IMC")
print("------------------------------")
while True:
    peso_input = input("Digite seu peso em kg: ")
    peso_input = peso_input.replace(",", ".")
    try:
        peso = float(peso_input)
        break
    except ValueError:
        print("Por favor, insira um valor numérico válido para o peso.")

print("------------------------------")
while True:
    altura = input("Digite sua altura em metros: ")
    altura = altura.replace(",", ".")  
    try:
        altura = float(altura)
        break
    except ValueError:
        print("Por favor, insira um valor numérico válido para a altura.")
print("------------------------------")
imc = peso / (altura ** 2)

print(f"Seu IMC é: {imc:.2f}")
print("------------------------------")
if imc <= 18.5:
    print("Você está abaixo do peso.")
elif imc <= 24.9:
    print("Você está com peso normal.")
elif imc <= 29.9:
    print("Você está com sobrepeso.")
elif imc <= 34.9:
    print("Você está com obesidade Grau 1.")
elif imc <= 39.9:
    print("Você está com obesidade Grau 2.")
else:
    print("Você está com obesidade Grau 3 (ou obesidade Mórbida).")
print("------------------------------")
`}
                </pre>
            </div>
        </div>
    );
}

export default Activity012;
