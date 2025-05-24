import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-container'>
                <ul className='fotter-list'>
                    <li className='footer-list-item'><button> Android App</button></li>
                    <li className='footer-list-item'><button> Terms of service</button></li>
                    <li className='footer-list-item'><button> Contact </button></li>
                </ul>
                <div>
                    <p>Movie Browser is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from MoviesCloud and watch it later if you want.</p>
                    <p>© Movie Browser</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;