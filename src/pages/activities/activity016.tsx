import React, { useState } from 'react';

function Activity016() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [delta, setDelta] = useState(null);
    const [x1, setX1] = useState(null);
    const [x2, setX2] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'a') setA(value);
        if (name === 'b') setB(value);
        if (name === 'c') setC(value);
    };

    const calculateBhaskara = () => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const numC = parseFloat(c);
        const calculatedDelta = numB ** 2 - 4 * numA * numC;
        setDelta(calculatedDelta);

        if (calculatedDelta < 0) {
            setX1(null);
            setX2(null);
            return;
        }

        const calculatedX1 = (-numB + Math.sqrt(calculatedDelta)) / (2 * numA);
        const calculatedX2 = (-numB - Math.sqrt(calculatedDelta)) / (2 * numA);
        setX1(calculatedX1.toFixed(2));
        setX2(calculatedX2.toFixed(2));
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 16</h1>
                <p>Fórmula de Bhaskara</p>
                <p>Calcule as raízes de uma equação quadrática utilizando a fórmula de Bhaskara.</p>
            </div>
            <div className="code-section">
                <h1>Fórmula de Bhaskara</h1>
                <div className="code-snippet-ten">
                    <div className="input-group">
                        <input 
                            name="a"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite o valor de a"
                            value={a}
                            onChange={handleInputChange} 
                        />
                        <input 
                            name="b"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite o valor de b"
                            value={b}
                            onChange={handleInputChange} 
                        />
                        <input 
                            name="c"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite o valor de c"
                            value={c}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button className="button" onClick={calculateBhaskara}>
                            Calcular
                        </button>
                    </div>
                    <div className="result">
                        {delta !== null && delta >= 0 && (
                            <p>x1 é aproximadamente {x1}</p>
                        )}
                        {delta !== null && delta >= 0 && (
                            <p>x2 é aproximadamente {x2}</p>
                        )}
                        {delta !== null && delta >= 0 && (
                            <p>Delta é aproximadamente {delta}</p>
                        )}
                        {delta !== null && delta < 0 && (
                            <p>O valor do Delta deu negativo. Não existem raízes reais para esta equação</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="code-section">
                <h1>Código:</h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS, então algumas variáveis a mais foram adicionadas. Abaixo está o código em JavaScript original:</p>
                <pre className="code-snippet">
                    {`
function calculateBhaskara(a, b, c) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);
    const calculatedDelta = numB ** 2 - 4 * numA * numC;
    let x1 = null;
    let x2 = null;

    if (calculatedDelta < 0) {
        return { delta: calculatedDelta, x1, x2 };
    }

    const calculatedX1 = (-numB + Math.sqrt(calculatedDelta)) / (2 * numA);
    const calculatedX2 = (-numB - Math.sqrt(calculatedDelta)) / (2 * numA);
    x1 = calculatedX1.toFixed(2);
    x2 = calculatedX2.toFixed(2);

    return { delta: calculatedDelta, x1, x2 };
}

const a = prompt("Digite o valor de a: ");
const b = prompt("Digite o valor de b: ");
const c = prompt("Digite o valor de c: ");

const { delta, x1, x2 } = calculateBhaskara(a, b, c);

console.log("------------------------------");
console.log("Fórmula de Bhaskara");
console.log("------------------------------");
console.log(\`Delta é igual a \${delta}\`);
console.log("------------------------------");

if (delta < 0) {
    console.log("O valor do Delta deu negativo. Não existem raízes reais para esta equação");
} else {
    console.log(\`x1 é aproximadamente \${x1}\`);
    console.log(\`x2 é aproximadamente \${x2}\`);
}

console.log("------------------------------");
`}
                </pre>
            </div>
        </div>
    );
}

export default Activity016;
