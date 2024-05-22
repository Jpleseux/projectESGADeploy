import { ChangeEvent, useState } from "react";

function Activity005() {
    const [value, setvalue] = useState<number | undefined>(undefined);
    const [result, setResult] = useState<string | undefined>(undefined);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setvalue(parseInt(value));
    };

    async function calculate() {
        if (!value) {
            window.alert("O valor da data deve ser válido");
        } else {
            setResult(`Você deve beber ${(value * 35) / 1000} Litros de agua`);
        }
    }
    return (
        <div className="container">
            <div className="info-section">
                <h1>Desafio 05</h1>
                <p>
                    O usuário deve informar seu peso e o algoritmo deve calcular quantos litros de agua ele deve ingerir por dia (35ml por kg)
                </p>
            </div>
            <div className="code-section">
                <h1>Calcular Litros</h1>
                <div className="code-snippet">
                    <p>Digite seu Peso(Kg)</p>
                    <div className="input-group">
                        <input 
                            autoComplete="off" 
                            name="val" 
                            id="val" 
                            className="input custom-width" 
                            type="number" 
                            onChange={handleOnChange} 
                        />
                    </div>
                    <button className="button" onClick={calculate}>
                        Calcular
                    </button>
                    {result && <div className="result-box">{result}</div>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código:</h1>
                <p>
                    O código foi adaptado para funcionar em páginas web usando REACT JS então algumas variáveis a mais foram adicionadas, mas abaixo está o código em JavaScript original:
                </p>
                <pre className="code-snippet">
                    {"async function calculate(value) {\n    if (!value) {\n        window.alert(\"O valor da data deve ser válido\");\n    } else {\n        console.log(`Você deve beber ${(value * 35) / 1000} Litros de agua`);\n    }\n}"}
                </pre>
            </div>
        </div>
    )
}
export default Activity005;