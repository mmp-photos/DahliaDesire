import { useState, useRef } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

import flowerLogo from './../assets/images/flower_logo.svg';

const Header = ({ name, setName }) => {
    const [ visibility, setVisibility ] = useState('invisible');
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
        location.reload();
    };

    return(
        <header>
            {name
                ?   <header>
                    <img className="primary-logo" style={{cursor: "pointer", opacity: 1, transition: "opacity 3s"}}src={flowerLogo} alt="Dahlia Logo" onClick={navigateHome}/>
                    <h1>{name} Desire</h1>
                    <nav>
                        <ul>
                            <li><Link to={{
                                    pathname: '/photos',
                                    state: { name, setName }
                                    }}>Photos</Link></li>
                            <li><Link to="/booking">Book Me</Link></li>
                            <li><Link to="/">Shows</Link></li>
                        </ul>
                    </nav>
                    </header>
                : null
            }
        </header>
    )
};

export default Header;