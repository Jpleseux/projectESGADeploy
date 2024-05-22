import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start mt-auto">
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2020 Copyright:  
                <a className="text-body m-2" href="https://github.com/Jpleseux/projectESGA">ProjectESGA</a>
            </div>
        </footer>
    );
}

export default Footer;
