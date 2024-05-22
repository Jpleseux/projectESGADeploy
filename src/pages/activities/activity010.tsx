import { useState } from "react";

function Activity010() {
    const [order, setOrder] = useState<{value: number, porcent: 0}>({value: 0, porcent: 0});
    const [result, setResult] = useState("");

    const handleOnChange = (e: any) => {
        const { name, value } = e.target;
        setOrder((prevState) => ({ ...prevState, [name]: value }));    
    };

    const calculate = () => {
        console.log(order);
        if (order.value !== 0) {
            if (order.porcent > 0) {
                setResult(`${order.value - ((order.value * order.porcent) / 100)} R$`)
            } else {
                setResult(`${order.value - ((order.value * 10) / 100)} R$`)
            }
        } else {
            window.alert("O valor deve ser maior que 0")
        }
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 10</h1>
                <p>Algoritmo do Boi</p>
                <p>
                    O usuário deve poder informar o valor da venda e do desconto.
                    <br />
                    Caso o valor do desconto não seja informado, deve estipular o valor de 10%.
                </p>
            </div>
            <div className="code-section">
                <h1>Calculo de Compra</h1>
                <div className="code-snippet-ten">
                    <div className="input-group">
                        <input 
                            id="oxWeightInput"
                            autoComplete="off" 
                            name="value"
                            className="input m-4" 
                            type="number" 
                            placeholder={`Digite o valor da compra`}
                            onChange={handleOnChange} 
                        />
                        <input 
                            id="oxWeightInput"
                            name="porcent"
                            autoComplete="off" 
                            className="input m-4" 
                            type="number" 
                            placeholder={`Digite o valor do desconto`}
                            onChange={handleOnChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button className="button" onClick={calculate}>
                            Calcular conta
                        </button>
                    </div>
                    {result && <p className="m-4">O valor da conta com desconto de {order.porcent ? order.porcent : 10}% é: <b>{result}</b></p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código: </h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS então algumas variáveis a mais foram adicionadas, mas abaixo está o código em JavaScript original:</p>
                <pre className="code-snippet">
                    {`
const value = parseFloat(prompt("Digite o valor da compra: "));
let porcent = 10;

const keep = prompt("O senhor tem algum cupom de desconto? (S/N): ");
if (keep.toUpperCase() === "S") {
    porcent = parseInt(prompt("Digite o valor do desconto: "), 10);
}

console.log(\`O valor da compra com o desconto de \${porcent}% é: \${value - (value * porcent / 100)} R$\`);
`}
                </pre>
            </div>
        </div>
    );
}

export default Activity010;
