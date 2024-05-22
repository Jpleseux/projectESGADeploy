import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';
import { Outlet } from 'react-router';
import "./App.css"
function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <div className="flex-grow-2">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
