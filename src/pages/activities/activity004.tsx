import { ChangeEvent, useState } from "react";

function Activity004() {
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
            if (value % 2 === 0) {
                setResult(`O número ${value} é PAR`);
            } else {
                setResult(`O número ${value} é IMPAR`);
            }
        }
    }

    return (
        <div className="container">
            <div className="info-section">
                <h1>Desafio 04</h1>
                <p>
                    Algoritmo para verificar se o número informado pelo usuário é ímpar ou par
                    <br />
                    Não utilizar função pronta para o cálculo
                </p>
            </div>
            <div className="code-section">
                <h1>Conversor</h1>
                <div className="code-snippet">
                    <p>Digite o número a ser analisado</p>
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
                    O código foi adaptado para funcionar em páginas web usando REACT JS então algumas variáveis a mais foram adicionadas, mas abaixo está o código em Python original:
                </p>
                <pre className="code-snippet">
                    {`
def Impar(numero):
    if(numero%2 ==0):
        print(f"{numero} é PAR!")
    else:
        print(f"{numero} é ÍMPAR!")

def main():
    cont = 1
    while cont==1:
        num = float(input("Digite um número qualquer para verificar se é ímpar ou par: "))
        Impar(num)
        cont = input("Deseja continuar? (1) SIM, (0) NÃO ")
        if cont!=1:
            break

main()
                    `}
                </pre>
            </div>
        </div>
    );
}
export default Activity004;
