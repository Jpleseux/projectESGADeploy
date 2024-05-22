import React, { useState } from 'react';

function Activity006() {
    const [result, setResult] = useState('');
    const [userWin] = useState<string[]>([]);
    const [machineWin] = useState<string[]>([]);

    const options = ['pedra', 'papel', 'tesoura'];

    const playGame = (userChoice: string) => {
        const machineChoice = options[Math.floor(Math.random() * options.length)];
        if (userChoice === machineChoice) {
            setResult('Empate!');
        } else if (
            (userChoice === 'pedra' && machineChoice === 'tesoura') ||
            (userChoice === 'papel' && machineChoice === 'pedra') ||
            (userChoice === 'tesoura' && machineChoice === 'papel')
        ) {
            userWin.push("win");
            setResult('Você ganhou!');
        } else {
            machineWin.push("win");
            setResult('Máquina ganhou!');
        }
    };

    return (
        <div className="container">
            <div className="info-section">
                <h1>Desafio 06</h1>
                <p>Jogar Pedra, Papel, Tesoura</p>
                <p style={{marginLeft: "5%"}}>Vitórias do usuario: {userWin.length} <b>VS</b> Vitórias da maquina: {machineWin.length}</p>
            </div>
            <div className="code-section">
                <h1>Jogar Pedra, Papel, Tesoura</h1>
                <div className="code-snippet">
                    <p>Escolha uma opção:</p>
                    <div className="options">
                        {options.map((option, index) => (
                            <button key={index} className="button" onClick={() => playGame(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="result-box">{result}</div>
                </div>
            </div>
            <div className="code-section">
                <h1>Código: </h1>
                <p>O código foi adaptado para funcionar em paginas web usando REACT JS então algumas variaveis a mais foram adicionadas, mas abaixo está o código em JAVA SCRIPT original: </p>
                <pre className="code-snippet">
                    {`
const playGame = () => {
    const userChoice = prompt("Escolha pedra, papel ou tesoura:");
    if (!userChoice || !['pedra', 'papel', 'tesoura'].includes(userChoice)) {
        alert("Escolha inválida!");
        return;
    }
    
    const options = ['pedra', 'papel', 'tesoura'];
    const machineChoice = options[Math.floor(Math.random() * options.length)];

    if (userChoice === machineChoice) {
        setResult('Empate!');
    } else if (
        (userChoice === 'pedra' && machineChoice === 'tesoura') ||
        (userChoice === 'papel' && machineChoice === 'pedra') ||
        (userChoice === 'tesoura' && machineChoice === 'papel')
    ) {
        console.log("Você ganhou");
    } else {
        console.log("A máquina ganhou");
    }
};
playGame()
                    `}
                </pre>
                <p>O Código funciona recebendo o valor do usuario e após isso pegando um valor randomico de um array e comparando com a escolha do usuario</p>
            </div>
        </div>
    );
}

export default Activity006;
