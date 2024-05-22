import React, { useState } from 'react';

function Activity020() {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'n1') setN1(value);
        if (name === 'n2') setN2(value);
    };

    const calculateFinalGrade = () => {
        const numN1 = parseFloat(n1.replace(",", "."));
        const numN2 = parseFloat(n2.replace(",", "."));
        const final = (numN1 / 10) * numN2;
        setResult(`${final}`)
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 20</h1>
                <p>Calculadora de Nota de trabalho</p>
                <p>Calcule a nota final de um trabalho e determine o resultado pelo peso</p>
            </div>
            <div className="code-section">
                <h1>Calculadora de Nota Final</h1>
                <div className="code-snippet-ten">
                    <div className="input-group">
                        <input 
                            name="n1"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite sua nota (0 a 10)"
                            value={n1}
                            min={0}
                            max={10}
                            onChange={handleInputChange} 
                        />
                        <input 
                            name="n2"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite o peso nota"
                            value={n2}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button className="button" onClick={calculateFinalGrade}>
                            Calcular Nota
                        </button>
                    </div>
                    <div className="result">
                        {result && (
                            <p>A nota do trabalho é: <b>{result}</b></p>
                        )}
                    </div>
                </div>
            </div>
            <div className="code-section">
                <h1>Código:</h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS, então algumas variáveis a mais foram adicionadas. Abaixo está o código em JavaScript original:</p>
                <pre className="code-snippet">
                    {`
print("-----------------------------------------")
nota_trabalho = input("Digite a nota do trabalho (entre 0 e 10): ")
nota_trabalho = nota_trabalho.replace(",", ".")
nota_trabalho = float(nota_trabalho)
print("-----------------------------------------")

peso = 3
nota_final = (nota_trabalho / 10) * peso

print(f"A nota final do trabalho é: {nota_final}")
print("-----------------------------------------")
`}
                </pre>
            </div>
        </div>
    );
}

export default Activity020;
