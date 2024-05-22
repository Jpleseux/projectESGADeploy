import { ChangeEvent, useState } from "react";

function Activity003() {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [result, setResult] = useState<string | undefined>(undefined);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setDate(new Date(value));
    };

    async function calculate() {
        const dateNow = new Date(Date.now());
        if (!date) {
            window.alert("O valor da data deve ser válido")
        } else if (date > dateNow) {
            window.alert("O valor da data selecionada não pode ser maior que a atual")
        } else if (date) {
            const diffTime = Math.abs(dateNow.getTime() - date.getTime());
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            
            const years = Math.floor(diffDays / 365);
            const months = Math.floor((diffDays % 365) / 30);
            const days = diffDays % 30;
            
            setResult(`${years} anos, ${months} meses, e ${days} dias`);
        }
    }

    return (
        <div>
            <div className="info-section">
                <h1>Desafio 03</h1>
                <p>O usuário informa sua data de nascimento e o programa deve retornar sua idade em anos, meses e dias</p>
            </div>
            <div className="code-section">
                <h1>Conversor</h1>
                <div className="code-snippet">
                    <p>Digite sua data de nascimento</p>
                    <div className="input-group">
                        <input 
                            autoComplete="off" 
                            name="val" 
                            id="val" 
                            className="input custom-width" 
                            type="date" 
                            onChange={handleOnChange} 
                        />
                    </div>
                    <button className="button" onClick={calculate}>
                        Calcular
                    </button>
                    {result && <p><b></b> {result}</p>}
                </div>
            </div>
            <div className="code-section">
                <h1>Código: </h1>
                <p>O código foi adaptado para funcionar em paginas web usando REACT JS então algumas variaveis a mais foram adicionadas, mas abaixo está o código em python original, onde usamos a data definida pelo usuario e calculamos com a data de hoje: </p>
                <pre className="code-snippet">
                    {`
import datetime

print("-----------------------------------")
d = int(input("Em que dia você nasceu? "))
m = int(input("Em qual mês você nasceu? "))
a = int(input("Em qual ano você nasceu? "))

data_nascimento = datetime.datetime(a, m, d)
data_atual = datetime.datetime.now()

idade = (data_atual - data_nascimento).days

print(f"Você tem {idade} dias de idade.")
print("-----------------------------------")
                    `}
                </pre>
            </div>
        </div>
    );
}

export default Activity003;
