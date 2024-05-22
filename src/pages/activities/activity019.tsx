import React, { useState } from 'react';

function Activity019() {
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
        const finalGrade = numN1 + numN2;

        let resultMessage = '';
        if (finalGrade >= 14) {
            resultMessage = `O aluno está aprovado! A nota final do aluno é: ${finalGrade.toFixed(2)}`;
        } else {
            resultMessage = `O aluno está reprovado! A nota final do aluno é: ${finalGrade.toFixed(2)}`;
        }
        setResult(resultMessage);
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 19</h1>
                <p>Calculadora de Nota Final</p>
                <p>Calcule a nota final de um aluno e determine se ele está aprovado ou reprovado.</p>
            </div>
            <div className="code-section">
                <h1>Calculadora de Nota Final</h1>
                <div className="code-snippet-ten">
                    <div className="input-group">
                        <input 
                            name="n1"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite sua primeira nota (0 a 10)"
                            value={n1}
                            min={0}
                            onChange={handleInputChange} 
                        />
                        <input 
                            name="n2"
                            className="input m-4" 
                            type="text" 
                            placeholder="Digite sua segunda nota (0 a 10)"
                            value={n2}
                            max={10}
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button className="button" onClick={calculateFinalGrade}>
                            Calcular Nota Final
                        </button>
                    </div>
                    <div className="result">
                        {result && (
                            <p>{result}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="code-section">
                <h1>Código:</h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS, então algumas variáveis a mais foram adicionadas. Abaixo está o código em Python original:</p>
                <pre className="code-snippet">
                    {`
n1 = input("Digite sua primeira nota (0 a 10): ")
n1 = n1.replace(",", ".")
n1 = float(n1)

n2 = input("Digite sua segunda nota (0 a 10): ")
n2 = n2.replace(",", ".")
n2 = float(n2)

notafinal = n1 + n2

if notafinal >= 14:
    print("O aluno está aprovado!")
    print(f"a nota final do aluno é: {notafinal:.2f}")
else:
    print("O aluno esta reprovado!")
    print(f"A nota final do aluno é: {notafinal:.2f}")
`}
                </pre>
            </div>
        </div>
    );
}

export default Activity019;
