import React, { useState } from 'react';

function Activity018() {
    const [eggs, setEggs] = useState("");
    const [useSalt, setUseSalt] = useState("");
    const [usePepper, setUsePepper] = useState("");
    const [result, setResult] = useState("");

    const handleEggsChange = (e) => setEggs(e.target.value);
    const handleSaltChange = (e) => setUseSalt(e.target.value.toLowerCase());
    const handlePepperChange = (e) => setUsePepper(e.target.value.toLowerCase());

    const cookEggs = () => {
        let steps = "";
        steps += "---------PASSO 1---------\n";
        steps += "Adicione óleo na frigideira\n";
        steps += "Aqueça a frigideira em fogo médio\n\n";

        steps += "---------PASSO 2---------\n";
        steps += `Quebre ${eggs} ovo(s) na frigideira\n\n`;

        if (useSalt === "sim") {
            steps += "---------PASSO 3---------\n";
            steps += "Adicione sal\n\n";
        }
        if (usePepper === "sim") {
            steps += "Adicione pimenta\n\n";
        }

        steps += "---------PASSO 4---------\n";
        steps += "Cozinhe os ovos por 3 minutos\n\n";

        steps += "---------PASSO 5---------\n";
        steps += "Retire os ovos da frigideira\n\n";

        steps += "---------PASSO 6---------\n";
        steps += "Sirva os ovos quentes e aproveite!\n";

        setResult(steps);
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 18</h1>
                <p>Fórmula de fritar ovos</p>
                <p>Fritar ovos</p>
            </div>
            <div className="code-section">
                <h1>Descrição da fritagem</h1>
                <div className="code-snippet-ten">
                <div className="input-group">
                        <p style={{color: "white"}}>Quantos ovos você gostaria de fritar?</p>
                        <input type="number" value={eggs} onChange={handleEggsChange} className="input m-4"/>
                    <br />
                    <p style={{color: "white"}}>Deseja adicionar sal aos ovos? (sim/não) </p>
                        <input type="text" value={useSalt} onChange={handleSaltChange} className="input m-4"/>
                    <br />
                    <p style={{color: "white"}}>Deseja adicionar pimenta aos ovos? (sim/não)</p>
                        <input type="text" value={usePepper} onChange={handlePepperChange} className="input m-4"/>
                    <br />
                    <div className="button-group">
                        <button className="button" onClick={cookEggs}>
                            Calcular
                        </button>
                    </div>                </div>
                </div>
                {result && <pre className="code-snippet">{result}</pre>}
            </div>
            <div className="code-section">
                <h1>Código(Feito Por Marcos Vinicius):</h1>
                <p>O código foi adaptado para funcionar em páginas web usando React JS, então algumas variáveis a mais foram adicionadas. Abaixo está o código em Python original:</p>
                <pre className="code-snippet">
                    {`
ovos = float(input("Quantos ovos você gostaria de fritar? "))              
usar_sal = input("Deseja adicionar sal aos ovos? (sim/não): ").lower() 
usar_pimenta = input("Deseja adicionar pimenta aos ovos? (sim/não): ").lower()  

def aquecer_frigideira(fogo):
    print("---------PASSO 1---------")
    print("Adicione óleo na frigideia")
    print("\nAqueça a frigideira em fogo médio")  

aquecer_frigideira("médio")  

def quebrar_ovos(quantidade):
    print("---------PASSO 2---------")
    print(f"\nQuebre {quantidade} ovo(s) na frigideira")  

quebrar_ovos(ovos)  

if usar_sal == "sim":
    print("---------PASSO 3---------")
    print("\nAdicione sal")  
if usar_pimenta == "sim":
    print("Adicione pimenta")  

def cozinhar_ovos(tempo):
    print("---------PASSO 4---------")
    print(f"\ncozinhe os ovos por {tempo} minutos")  

cozinhar_ovos(3) 

def retirar_ovos():
    print("---------PASSO 5---------")
    print("\nRetire os ovos da frigideira") 

retirar_ovos()  

def servir():
    print("---------PASSO 6---------")
    print("\nSirva os ovos quentes e aproveite!")  
servir()`}
                </pre>
            </div>
        </div>
    );
}

export default Activity018;
