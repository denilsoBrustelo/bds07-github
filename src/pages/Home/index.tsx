import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">

        <div >
            <div>
            <div>
                <h1>Desafio Github API</h1>
                <p>
                Bootcamp Spring React - DevSuperior
                </p>
            </div>
            <div>

                <Link to="/cepsearch">
                    <button className="btn btn-primary btn-lg start-button">Começar</button>
                </Link>

            </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
