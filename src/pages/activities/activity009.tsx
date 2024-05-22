import { useState } from "react";

function Activity009() {
    const [oxen, setOxen] = useState([]);
    const [count, setCount] = useState(1);
    const [result, setResult] = useState("");

    const handleWeightInput = (event) => {
        setResult(null);
        const weight = parseFloat(event.target.value);
        if (!isNaN(weight)) {
            setOxen((prevOxen) => [...prevOxen, { ox: count, weight }]);
        }
    };

    const handleAddMore = () => {
        setCount((prevCount) => prevCount + 1);
        document.getElementById('oxWeightInput').value = ''; // Reset input field
    };

    const calculate = () => {
        setOxen([]);
        setCount(1);
        if (oxen.length > 0) {
            const heaviest = oxen.reduce((max, ox) => (ox.weight > max.weight ? ox : max), oxen[0]);
            const lightest = oxen.reduce((min, ox) => (ox.weight < min.weight ? ox : min), oxen[0]);
            if (oxen.length > 1) {
                setResult(`Foram cadastrados ${oxen.length} bois.\nO boi mais pesado é o número ${heaviest.ox} com ${heaviest.weight} arrobas.\nO boi mais leve é o número ${lightest.ox} com ${lightest.weight} arrobas.`);
            } else {
                setResult(`Foi cadastrado ${oxen.length} boi`)
            }
        }
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 09</h1>
                <p>Algoritmo do Boi</p>
                <p>
                    Calcular quantas cabeças, peso, animal mais leve, mais pesado de uma determinada remessa de animais conforme o usuário irá informar.
                    O usuário deve poder decidir se deseja informar mais animais ou parar ao final de cada repetição.
                </p>
            </div>
            <div className="code-section">
                <h1>Cadastro de Bois</h1>
                <div className="code-snippet">
                    <p>Digite o peso do boi {count} (em Arrobas):</p>
                    <div className="input-group">
                        <input 
                            id="oxWeightInput"
                            autoComplete="off" 
                            className="input w-100" 
                            type="number" 
                            placeholder={`Digite o peso do boi ${count}`}
                            onChange={handleWeightInput} 
                        />
                    <button className="button" onClick={handleAddMore}>
                        Adicionar
                    </button>
                    </div>
                    <button className="button" onClick={calculate}>
                        Calcular os bois
                    </button>

                    {result && <p className="m-4"><b>{result}</b></p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código: </h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS então algumas variáveis a mais foram adicionadas, mas abaixo está o código em JAVA SCRIPT original: </p>
                <pre className="code-snippet">
                    {
`
const oxes = [];
let count = 1;
let isAble = true;

while (isAble) {
    const weight = parseFloat(prompt("Digite o peso do boi " + count + " (em Arrobas): "));
    oxes.push({ ox: count, weight: weight });

    const keep = prompt("Deseja adicionar mais algum boi? (S/N): ");
    if (keep.toUpperCase() === "S") {
        count++;
        continue;
    } else {
        const bigger = oxes.reduce((max, ox) => (ox.weight > max.weight ? ox : max), { weight: -Infinity });
        const lower = oxes.reduce((min, ox) => (ox.weight < min.weight ? ox : min), { weight: Infinity });
        
        console.log(\`#############################################\`);
        console.log(\`Foram cadastrados \${oxes.length} bois.\`);
        
        if (oxes.length > 1) {
            console.log(\`O boi mais pesado é o número \${bigger.ox} com \${bigger.weight} arrobas.\`);
            console.log(\`O boi mais leve é o número \${lower.ox} com \${lower.weight} arrobas.\`);
        }
        
        isAble = false;
    }
}
`
                    }
                </pre>
            </div>
        </div>
    );
}

export default Activity009;
