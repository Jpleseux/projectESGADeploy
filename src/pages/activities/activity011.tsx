import { useState } from "react";

function Activity011() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleOnChange = (e) => {
        const { value } = e.target;
        const floatRegex = /^\d*\.?\d*$/;
        if (floatRegex.test(value)) {
            setValue(value);
        }
    };

    const calculate = () => {
        const reValue = parseFloat(value);
        const baseMulta = 250;
        const velocidadeMaxima = 80;
        let multa = 0;

        if (reValue <= velocidadeMaxima) {
            setResult("Você não tem multa.");
        } else {
            const excesso25 = velocidadeMaxima * 1.25;
            const excesso50 = velocidadeMaxima * 1.50;

            if (reValue > excesso50) {
                multa = baseMulta * 10;
            } else if (reValue > excesso25) {
                multa = baseMulta * 5;
            } else {
                multa = baseMulta;
            }

            setResult(`${multa.toFixed(2)} R$`);
        }
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 11</h1>
                <p>Algoritmo da multa</p>
                <p>
                    Calcular o valor de uma multa de trânsito por velocidade.
                    <br />
                    A multa é R$250,00 para quem atinge a velocidade máxima permitida (80km/h).
                    <br />
                    O usuário deve informar a velocidade em que estava.
                    <br />
                    O programa deve calcular o adicional de multa caso o valor ultrapasse a velocidade máxima permitida 
                    (25% a mais na velocidade = 5x o valor da multa; 50% a mais na velocidade = 10x o valor da multa).
                </p>
            </div>
            <div className="code-section">
                <h1>Cálculo de Multa</h1>
                <div className="code-snippet-ten">
                    <div className="input-group">
                        <input 
                            id="oxWeightInput"
                            autoComplete="off" 
                            name="value"
                            className="input m-4" 
                            type="text" 
                            placeholder="Velocidade da multa"
                            value={value}
                            onChange={handleOnChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button className="button" onClick={calculate}>
                            Calcular Multa
                        </button>
                    </div>
                    {result && <p className="m-4">O valor da multa: <b>{result}</b></p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código: </h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS então algumas variáveis a mais foram adicionadas, mas abaixo está o código em JavaScript original:</p>
                <pre className="code-snippet">
                    {`
const value = parseFloat(prompt("Digite a velocidade: "));
const baseMulta = 250;
const velocidadeMaxima = 80;
let multa = 0;

if (value <= velocidadeMaxima) {
    console.log("Você não tem multa.");
} else {
    const excesso25 = velocidadeMaxima * 1.25;
    const excesso50 = velocidadeMaxima * 1.50;

    if (value > excesso50) {
        multa = baseMulta * 10;
    } else if (value > excesso25) {
        multa = baseMulta * 5;
    } else {
        multa = baseMulta;
    }

    console.log(\`O valor da multa: \${multa.toFixed(2)} R$\`);
}
`}
                </pre>
            </div>
        </div>
    );
}

export default Activity011;
