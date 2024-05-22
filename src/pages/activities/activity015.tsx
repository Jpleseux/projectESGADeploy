import React, { useState } from 'react';

function Activity015() {
    const [quantidadeCombustivel, setQuantidadeCombustivel] = useState("");
    const [distanciaPercorrida, setDistanciaPercorrida] = useState("");
    const [resultado, setResultado] = useState("");

    const handleQuantidadeCombustivelChange = (e) => {
        const { value } = e.target;
        setQuantidadeCombustivel(value);
    };

    const handleDistanciaPercorridaChange = (e) => {
        const { value } = e.target;
        setDistanciaPercorrida(value);
    };

    const calcularConsumo = () => {
        setQuantidadeCombustivel("");
        setDistanciaPercorrida("");
        const qtdCombustivel = parseFloat(quantidadeCombustivel.replace(",", "."));
        const distancia = parseFloat(distanciaPercorrida.replace(",", "."));

        if (isNaN(qtdCombustivel) || isNaN(distancia) || qtdCombustivel <= 0 || distancia <= 0) {
            setResultado("Valores inválidos. Certifique-se de que a quantidade de combustível e a distância percorrida sejam maiores que zero.");
            return;
        }

        const consumo = qtdCombustivel / distancia;
        setResultado(`O consumo do automóvel é de ${consumo.toFixed(2)} litros por quilômetro.`);
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 15</h1>
                <p>Consumo de automóvel</p>
                <p>Medir o consumo de um automóvel, mostrando a quantidade de litros de combustível gastos a cada km rodado.</p>
            </div>
            <div className="code-section">
                <h1>Consumo de Automóvel</h1>
                <div className="code-snippet-ten">
                    <div className="input-group">
                        <input 
                            name="quantidadeCombustivel"
                            className="input m-4" 
                            type="text" 
                            placeholder="Quantidade consumida(em litros)"
                            value={quantidadeCombustivel}
                            onChange={handleQuantidadeCombustivelChange} 
                        />
                        <input 
                            name="distanciaPercorrida"
                            className="input m-4" 
                            type="text" 
                            placeholder="Distância(em quilômetros)"
                            value={distanciaPercorrida}
                            onChange={handleDistanciaPercorridaChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button className="button" onClick={calcularConsumo}>
                            Calcular
                        </button>
                    </div>
                    {resultado && <p className="m-4">{resultado}</p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código:</h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS, então algumas variáveis a mais foram adicionadas. Abaixo está o código em JavaScript original:</p>
                <pre className="code-snippet">
                    {`
function calcularConsumoAutomovel() {
    let quantidadeCombustivel, distanciaPercorrida;

    while (true) {
        let quantidadeCombustivelInput = prompt("Digite a quantidade de combustível gasto (em litros): ");
        quantidadeCombustivelInput = quantidadeCombustivelInput.replace(",", ".");
        quantidadeCombustivel = parseFloat(quantidadeCombustivelInput);
        
        if (!isNaN(quantidadeCombustivel) && quantidadeCombustivel > 0) {
            break;
        } else {
            console.log("Por favor, insira um valor numérico válido e maior que zero para a quantidade de combustível.");
        }
    }

    while (true) {
        let distanciaPercorridaInput = prompt("Digite a distância percorrida (em quilômetros): ");
        distanciaPercorridaInput = distanciaPercorridaInput.replace(",", ".");
        distanciaPercorrida = parseFloat(distanciaPercorridaInput);
        
        if (!isNaN(distanciaPercorrida) && distanciaPercorrida > 0) {
            break;
        } else {
            console.log("Por favor, insira um valor numérico válido e maior que zero para a distância percorrida.");
        }
    }

    const consumo = quantidadeCombustivel / distanciaPercorrida;
    console.log(\`O consumo do automóvel é de \${consumo.toFixed(2)} litros por quilômetro.\`);
}

calcularConsumoAutomovel();
`}
                </pre>
            </div>
        </div>
    );
}

export default Activity015;
