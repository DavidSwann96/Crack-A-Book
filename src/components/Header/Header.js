import BookStoreLogo from '../../assets/Crack-A-Logo4.png';
import '../../index.css';
import './Header.css';

const Header = ({Theme}) => {
    return (
        <section className={`Navbar-Container ${Theme ? 'background-green relative' : 'background-transparent'}`}>
            <div className="NavContainer container flex justify-between align-center">
                <a href='/' className="logo">
                    <img src={BookStoreLogo} className="store-logo" alt='Store-Logo'/>
                </a>
                <div>
                    <h1>Crack-A-Book</h1>
                    <p>Making scholars feel superior since 1874</p>
                </div>
                <nav className="nav-links-container">
                    <a href='/' className='nav-links'>Home</a>
                    <a href='/books' className='nav-links'>Books</a>
                </nav>
            </div>
        </section>
    );
};
export default Header;