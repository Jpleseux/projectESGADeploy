import { ChangeEvent, useState } from "react";

function Activity002() {
    const [calc, setCalc] = useState({ val: 0, method: "F" });
    const [result, setResult] = useState<string | undefined>(undefined);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCalc((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const calculate = () => {
        if (calc.method === "C") {
            setResult(`${calc.val}ª Celsius = ${(Number(calc.val) * (9 / 5)) + 32}º Fahrenheit`);
        } else {
            setResult(`${calc.val}ª Fahrenheit = ${(Number(calc.val) - 32) * (5 / 9)}º Celsius`);
        }
    };

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 02</h1>
                <p>Conversor de Temperatura Celsius e Fahrenheit, onde o usuário decide a unidade de medida de entrada.</p>
            </div>
            <div className="code-section">
                <h1>Conversor</h1>
                <div className="code-snippet">
                    <p>DIgite o valor em graus a ser convertido</p>
                    <div className="input-group">
                        <input 
                            autoComplete="off" 
                            name="val" 
                            id="val" 
                            className="input custom-width" 
                            type="number" 
                            placeholder="Valor em graus" 
                            onChange={handleOnChange} 
                        />
                    </div>
                    <p>Selecione o tipo de temperatura</p>
                    <div className="radio-inputs">
                        <label className="radio">
                            <input 
                                type="radio" 
                                name="method" 
                                checked={calc.method === "F"} 
                                onChange={handleOnChange} 
                                value="F" 
                            />
                            <span className="name">Fahrenheit</span>
                        </label>
                        <label className="radio">
                            <input 
                                type="radio" 
                                name="method" 
                                checked={calc.method === "C"} 
                                onChange={handleOnChange} 
                                value="C" 
                            />
                            <span className="name">Celsius</span>
                        </label>
                    </div>
                    <button className="button" onClick={calculate}>
                        Calcular
                    </button>
                    {result && <p>{result}</p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código: </h1>
                <p>O código foi adaptado para funcionar em paginas web usando REACT JS então algumas variaveis a mais foram adicionadas, mas abaixo está o código em python original: </p>
                <pre className="code-snippet">
                    {`
def celsius_para_fahrenheit(temp_celsius):
    return (temp_celsius * 9/5) + 32

def fahrenheit_para_celsius(temp_fahrenheit):
    return (temp_fahrenheit - 32) * 5/9

print("------------------------------")
print("Conversor de Temperatura")
print("------------------------------")

while True:
    unidade_origem = input("Escolha a unidade de temperatura (C para Celsius, F para Fahrenheit): ").upper()
    if unidade_origem in ["C", "F"]:
        break
    else:
        print("Escolha inválida. Por favor, insira 'C' para Celsius ou 'F' para Fahrenheit.")

while True:
    try:
        if unidade_origem == "C":
            temp_celsius = float(input("Digite a temperatura em Celsius: "))
            temp_fahrenheit = celsius_para_fahrenheit(temp_celsius)
            print(f"A temperatura em Fahrenheit é: {temp_fahrenheit:.2f}°F")
        else:
            temp_fahrenheit = float(input("Digite a temperatura em Fahrenheit: "))
            temp_celsius = fahrenheit_para_celsius(temp_fahrenheit)
            print(f"A temperatura em Celsius é: {temp_celsius:.2f}°C")
        break
    except ValueError:
        print("Por favor, insira um valor numérico válido.")

print("------------------------------")`
                    };
                </pre>
            </div>
        </div>
    );
}

export default Activity002;
