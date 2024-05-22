import React, { useState } from 'react';

function Activity007() {
    const [result, setResult] = useState('');
    const [input, setInput] = useState({ weigth: 8, upper: false, lower: false, numbers: false, espcial: false });

    const execute = () => {
        const senha = passwordHash(input);
        if (senha) {
            setResult("Senha gerada com sucesso: " + senha);
        } else {
            setResult("Não foi possível gerar a senha.");
        }
    };

    const passwordHash = (input) => {
        let caracteres = '';
        if (input.upper) {
            caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (input.lower) {
            caracteres += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (input.numbers) {
            caracteres += '0123456789';
        }
        if (input.espcial) {
            caracteres += '!@#$%^&*()-_+=';
        }

        if (!caracteres) {
            setResult("Erro: Você deve escolher pelo menos um tipo de caractere para gerar a senha.");
            return null;
        }

        let senha = '';
        for (let i = 0; i < input.weigth; i++) {
            senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return senha;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="container">
            <div className="info-section">
                <h1>Desafio 07</h1>
                <p>Gerar Senha Aleatória</p>
            </div>
            <div className="code-section">
                <h1>Gerar Senha Aleatória</h1>
                <div className="code-snippet">
                    <div className="input-group">
                        <label>
                            Comprimento da Senha:
                            <input 
                                type="number" 
                                name="weigth" 
                                value={input.weigth} 
                                onChange={handleChange} 
                                min="1"
                            />
                        </label>
                    </div>
                    <div className="checkbox-group">
                        <label className="checkbox">
                            <input 
                                type="checkbox" 
                                name="upper" 
                                checked={input.upper} 
                                onChange={handleChange} 
                            />
                            Letras Maiúsculas
                        </label>
                        <label className="checkbox">
                            <input 
                                type="checkbox" 
                                name="lower" 
                                checked={input.lower} 
                                onChange={handleChange} 
                            />
                            Letras Minúsculas
                        </label>
                        <label className="checkbox">
                            <input 
                                type="checkbox" 
                                name="numbers" 
                                checked={input.numbers} 
                                onChange={handleChange} 
                            />
                            Números
                        </label>
                        <label className="checkbox">
                            <input 
                                type="checkbox" 
                                name="espcial" 
                                checked={input.espcial} 
                                onChange={handleChange} 
                            />
                            Caracteres Especiais
                        </label>
                    </div>
                    <button className="button" onClick={execute}>Gerar Senha</button>
                    <div className="result-box">{result}</div>
                </div>
            </div>
            <div className="code-section">
                <h1>Código: </h1>
                <p>O código foi adaptado para funcionar em paginas web usando REACT JS então algumas variaveis a mais foram adicionadas, mas abaixo está o código em python original: </p>
                <pre className="code-snippet">
                    {`
import random
import string

def execute():
    comprimento = int(input("Comprimento da senha desejado: "))
    usar_maiusculas = input("Incluir letras maiúsculas? (s/n): ").lower() == 's'
    usar_minusculas = input("Incluir letras minúsculas? (s/n): ").lower() == 's'
    usar_numeros = input("Incluir números? (s/n): ").lower() == 's'
    usar_caracteres_especiais = input("Incluir caracteres especiais? (s/n): ").lower() == 's'

    senha = passwordHash(comprimento, usar_maiusculas, usar_minusculas, usar_numeros, usar_caracteres_especiais)
    if senha:
        print("Senha gerada com sucesso:", senha)
    else:
        print("Não foi possível gerar a senha.")

def passwordHash(comprimento, usar_maiusculas=True, usar_minusculas=True, usar_numeros=True, usar_caracteres_especiais=True):
    caracteres = ''
    if usar_maiusculas:
        caracteres += string.ascii_uppercase
    if usar_minusculas:
        caracteres += string.ascii_lowercase
    if usar_numeros:
        caracteres += string.digits
    if usar_caracteres_especiais:
        caracteres += string.punctuation

    if not caracteres:
        print("Erro: Você deve escolher pelo menos um tipo de caractere para gerar a senha.")
        return None

    senha = ''.join(random.choice(caracteres) for _ in range(comprimento))
    return senha
def main():
    execute()

if __name__ == "__main__":
    main()`
                    };
                </pre>
            </div>
        </div>
    );
}

export default Activity007;
