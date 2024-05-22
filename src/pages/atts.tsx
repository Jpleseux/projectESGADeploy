import { Link } from 'react-router-dom';
import tabuada from "../../public/images/tabuada.webp"
import convert from "../../public/images/convert.webp"
import clock from "../../public/images/clock.webp"
import numbers from "../../public/images/numbers.jpg"
import water from "../../public/images/water.png"
import game from "../../public/images/game.jpg"
import egg from "../../public/images/egg.jpeg"
import delivery from "../../public/images/delivery.png"
import bask from "../../public/images/bask.png"
import boi from "../../public/images/boi.webp"
import pass from "../../public/images/password.jpeg"
import words from "../../public/images/palavras.jpg"
import multa from "../../public/images/multa.jpeg"
import imc from "../../public/images/obesidade.jpg"
import calc from "../../public/images/calc.jpg"
import cpf from "../../public/images/cpf.jpg"
import gas from "../../public/images/gas.jpeg"
import note from "../../public/images/note.jpg"
import note2 from "../../public/images/note2.webp"
import compra from "../../public/images/compra.webp"
function Atts() {
    return (
        <>
            <header className="header">
                <h1 className="text-center my-4">Desafios</h1>
            </header>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={tabuada} className="card-img-top" alt="Tabuada" />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 01</h5>
                                <h6 className="card-subtitle mb-2">Tabuada com dois comandos</h6>
                                <p className="card-text">Tabuada feita com dois comandos FOR com o js</p>
                                <Link to="/activities/001" className="btn btn-primary mr-2">
                                    <i className="fas fa-link"></i> Ver Desafio
                                </Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary">
                                    <i className="fab fa-github"></i> Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={convert} className="card-img-top" alt="Conversor" />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 02</h5>
                                <h6 className="card-subtitle mb-2">Conversor</h6>
                                <p className="card-text">Conversor de fahrenheit e celsius</p>
                                <Link to="/activities/002" className="btn btn-primary mr-2">
                                    <i className="fas fa-link"></i> Ver Desafio
                                </Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary">
                                    <i className="fab fa-github"></i> Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={clock} className="card-img-top" alt="Calcular Idade" />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 03</h5>
                                <h6 className="card-subtitle mb-2">Calcular Idade</h6>
                                <p className="card-text">Calculador de idade onde mostra a idade em dias, anos e meses</p>
                                <Link to="/activities/003" className="btn btn-primary mr-2">
                                    <i className="fas fa-link"></i> Ver Desafio
                                </Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary">
                                    <i className="fab fa-github"></i> Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={numbers} className="card-img-top" alt="Verificar impar ou par" />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 04</h5>
                                <h6 className="card-subtitle mb-2">Verificar impar ou par</h6>
                                <p className="card-text">Calculador de um número e mostrar se o número é par ou ímpar</p>
                                <Link to="/activities/004" className="btn btn-primary mr-2">
                                    <i className="fas fa-link"></i> Ver Desafio
                                </Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary">
                                    <i className="fab fa-github"></i> Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={water} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 05</h5>
                                <h6 className="card-subtitle mb-2">Calcular</h6>
                                <p className="card-text">Calcular Litros com base no peso</p>
                                <Link to="/activities/005" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={game} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 06</h5>
                                <h6 className="card-subtitle mb-2">Jogar Pedra papel tesoura</h6>
                                <p className="card-text">Deve fazer um jogo de pedra papel e tesoura</p>
                                <Link to="/activities/006" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={pass} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 07</h5>
                                <h6 className="card-subtitle mb-2">Gerar Senhas</h6>
                                <p className="card-text">Gerar senhas com numeros e caracteres especiais</p>
                                <Link to="/activities/007" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={words} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 08</h5>
                                <h6 className="card-subtitle mb-2">Inverter Palavras</h6>
                                <p className="card-text">Gerar palavras invertidas de acordo com a palavra que o usuario fornecer</p>
                                <Link to="/activities/008" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={boi} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 09</h5>
                                <h6 className="card-subtitle mb-2">Desafio do boi</h6>
                                <p className="card-text">Gerenciar lote de bois</p>
                                <Link to="/activities/009" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={compra} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 10</h5>
                                <h6 className="card-subtitle mb-2">Desafio de compra</h6>
                                <p className="card-text">Calcular valor da compra descontando o desconto</p>
                                <Link to="/activities/010" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={multa} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 11</h5>
                                <h6 className="card-subtitle mb-2">Desafio de Multa</h6>
                                <p className="card-text">Calcular porcentagem de multa com base em velocidade</p>
                                <Link to="/activities/011" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={imc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 12</h5>
                                <h6 className="card-subtitle mb-2">Desafio IMC</h6>
                                <p className="card-text">Calcular IMC de acordo com peso e altura</p>
                                <Link to="/activities/012" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={calc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 13</h5>
                                <h6 className="card-subtitle mb-2">Desafio Calculadora</h6>
                                <p className="card-text">Calcular valores de acordo com parametros</p>
                                <Link to="/activities/013" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={cpf} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 14</h5>
                                <h6 className="card-subtitle mb-2">Desafio Validar CPF</h6>
                                <p className="card-text">Calcular CPF e retornar se é válido ou não</p>
                                <Link to="/activities/014" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={gas} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 15</h5>
                                <h6 className="card-subtitle mb-2">Desafio Consumo gasolina</h6>
                                <p className="card-text">Calcular Consumo gasolina</p>
                                <Link to="/activities/015" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={bask} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 16</h5>
                                <h6 className="card-subtitle mb-2">Desafio bhaskara</h6>
                                <p className="card-text">Calcular valor de bhaskara</p>
                                <Link to="/activities/016" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={delivery} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 17</h5>
                                <h6 className="card-subtitle mb-2">Desafio entregador</h6>
                                <p className="card-text">Atividade Descritivo para descrever entregas</p>
                                <Link to="/activities/017" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={egg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 18</h5>
                                <h6 className="card-subtitle mb-2">Desafio do ovo</h6>
                                <p className="card-text">Atividade Descritivo pra fritar ovo</p>
                                <Link to="/activities/018" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={note} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 19</h5>
                                <h6 className="card-subtitle mb-2">Desafio da nota</h6>
                                <p className="card-text">Atividade para calcular nota do aluno</p>
                                <Link to="/activities/019" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{ width: "18rem" }}>
                            <img src={note2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Desafio 20</h5>
                                <h6 className="card-subtitle mb-2">Desafio da nota de trabalho</h6>
                                <p className="card-text">Atividade para calcular nota de trabalho do aluno com peso na nota</p>
                                <Link to="/activities/020" className="btn btn-primary mr-2"><i className="fas fa-link"></i>Ver Desafio</Link>
                                <a href="https://github.com/Jpleseux/projectESGA" className="btn btn-secondary"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Atts;
