import { ChangeEvent, useState } from "react";

function Activity008() {
    const [word, setWord] = useState<string | undefined>(undefined);
    const [result, setResult] = useState<string | undefined>(undefined);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setWord(value);
    };

    async function calculate() {
        if (!word) {
            window.alert("O valor da palavra deve ser válido");
        } else {
            setResult(`${inverterString(word)}`);
        }
    }

    function inverterString(str: string): string {
        let reversedString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversedString += str[i];
        }
        return reversedString;
    }

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 08</h1>
                <p>O usuário deve informar uma palavra e a saída deve mostrar a palavra de trás para frente</p>
            </div>
            <div className="code-section">
                <h1>Conversor</h1>
                <div className="code-snippet">
                    <p>Digite a palavra a ser invertida</p>
                    <div className="input-group">
                        <input 
                            autoComplete="off" 
                            name="val" 
                            id="val" 
                            className="input custom-width" 
                            type="text" 
                            onChange={handleOnChange} 
                        />
                    </div>
                    <button className="button" onClick={calculate}>
                        Calcular
                    </button>
                    {result && <p>A Palavra invertida fica: <b>{result}</b></p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código: </h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS então algumas variáveis a mais foram adicionadas, mas abaixo está o código em JAVA SCRIPT original, onde usamos a data definida pelo usuário e calculamos com a data de hoje:</p>
                <pre className="code-snippet">
                    {`
function inverterString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

const userInput = prompt("Digite uma string para inverter: ");
if (userInput !== null) {
    const result = inverterString(userInput);
    alert("String invertida: " + result);
}

                    `}
                </pre>
            </div>
        </div>
    );
}

export default Activity008;
