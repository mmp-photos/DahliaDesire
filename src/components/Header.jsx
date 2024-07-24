import { useNavigate, Link } from 'react-router-dom';
import flowerLogo from './../assets/images/flower_logo.svg';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const Header = ({ params }) => {
    const { name, setName, initialRender, setInitialRender } = useContext(AppContext);
    console.log(`Name in Header is ${name}`);
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/')
        setInitialRender(true);
    };

    const seth1Size = () => {
        let windowWidth = window.screen.width;
        if (windowWidth > 400) {
            return;
        } else if (name === "Dahlia") {
            return "2rem";
        } else {
            return "1.5rem";
        }
    };
    let h1Size = seth1Size();

    return (
        <header>
            <>
                <img
                    className="primary-logo"
                    style={{ cursor: "pointer", opacity: 1, transition: "opacity 3s" }}
                    src={flowerLogo}
                    alt="Dahlia Logo"
                    onClick={navigateHome}
                />
                {initialRender
                    ?
                    <h1>Name your Desire</h1>
                    :
                    <>
                    <h1 style={{ fontSize: h1Size }}>{name} Desire</h1>
                    <nav>
                        <ul>
                            <li><Link to="/photos">Photos</Link></li>
                            <li><Link to="/booking">Book Me</Link></li>
                            <li><Link to="/">Shows</Link></li>
                        </ul>
                    </nav>
                    </>
                }
            </>
        </header>
    );
};

export default Header;
