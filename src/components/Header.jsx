import { useState, useEffect } from 'react';
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

    const seth1Size = () => {
        let windowWidth = window.screen.width;
        // console.log(windowWidth)
        if(windowWidth > 400){
            return
        } else if (name === "Dahlia") {
            return "2rem"
        } else {
            return "1.5rem"
        }
    };
    let h1Size = seth1Size();


    return(
        <header>
            {name
                ?   <header>
                    <img className="primary-logo" style={{cursor: "pointer", opacity: 1, transition: "opacity 3s"}}src={flowerLogo} alt="Dahlia Logo" onClick={navigateHome}/>
                    <h1 style={{fontSize: h1Size}} >{name} Desire</h1>
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