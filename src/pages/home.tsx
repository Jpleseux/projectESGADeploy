import { Link } from "react-router-dom";
import "../../public/css/index.css";
function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Bem-vindo ao ProjectESGA</h1>
                <p>Explore e participe dos nossos desafios!</p>
            </header>
            <section className="about-section">
                <h2>Sobre Nós</h2>
                <p>Nosso site escolar oferece uma variedade de desafios educacionais para ajudar você a aprender e se divertir ao mesmo tempo. Participe dos nossos desafios e mostre suas habilidades!</p>
            </section>
            <section className="challenges-section">
                <h2>Desafios</h2>
                <ul>
                    <Link to="/activities" style={{textDecoration: "none"}}><li>Acessar Desafios</li></Link>
                    <Link to="/about" style={{textDecoration: "none"}}><li>Alunos</li></Link>
                </ul>
            </section>

        </div>
    );
}

export default Home;
