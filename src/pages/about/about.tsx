import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import marquin from '../../../public/images/marquin.jpeg';
import mabil from '../../../public/images/mabil.jpeg';
import joao from '../../../public/images/joao.jpeg';
import eren from '../../../public/images/eren.jpeg';
import marcao from '../../../public/images/marcao.jpeg';

function About() {
    return (
        <div>
            <h1 className="text-center m-4">Olá, Conheça um pouco sobre nós</h1>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img 
                            className="d-block" 
                            src={marquin} 
                            alt="First slide" 
                            style={{ width: '60%', height: '600px', objectFit: 'fill', margin: '0 auto' }} 
                        />
                        <div className="carousel-caption">
                            <h3>Marcos V. Souza Medeiros</h3>
                            <p>Scrum Master</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img 
                            className="d-block" 
                            src={mabil} 
                            alt="Second slide" 
                            style={{ width: '50%', height: '600px', objectFit: 'fill', margin: '0 auto' }} 
                        />
                        <div className="carousel-caption">
                            <h3>Hamábily Alves dos Santos</h3>
                            <p>Product Ower</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img 
                            className="d-block" 
                            src={joao} 
                            alt="Thirdy slide" 
                            style={{ width: '50%', height: '600px', objectFit: 'fill', margin: '0 auto' }} 
                        />
                        <div className="carousel-caption">
                            <h3>João Pedro Leseux da Silva</h3>
                            <p>DEV</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img 
                            className="d-block" 
                            src={eren} 
                            alt="Thirdy slide" 
                            style={{ width: '50%', height: '600px', objectFit: 'fill', margin: '0 auto' }} 
                        />
                        <div className="carousel-caption">
                            <h3>Eduardo André Santos de Freitas</h3>
                            <p>DEV</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img 
                            className="d-block" 
                            src={marcao} 
                            alt="Thirdy slide" 
                            style={{ width: '50%', height: '600px', objectFit: 'fill', margin: '0 auto' }} 
                        />
                        <div className="carousel-caption">
                            <h3>Marcos Valenga</h3>
                            <p>DEV</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{color: "black"}}></span>
                    <span className="sr-only" style={{color: "black"}}>Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="sr-only"style={{color: "black"}}>Próximo</span>
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{color: "black"}}></span>

                </a>
            </div>
        </div>
    );
}

export default About;
