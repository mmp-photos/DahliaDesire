import { useState, useRef } from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    Collapse,
    Button
} from 'reactstrap';

import flowerLogo from './../assets/images/flower_logo.svg';

const Footer = ({ name, setName }) => {
    function raiseInvoiceClicked(){
        const url = 'somesite.com?data=yourDataToSend';
        window.open(url, '_blank');
    }

    const handleClick = (url) => {
        // console.log(url);
        window.open(url, '_blank');
    }

    return(
        <footer style={{bottom: "50px", width: "100%"}}>
            <span className="daddy-text opacity7">Folow your desires&nbsp; &nbsp;</span> 
            <button onClick={() => handleClick('https://www.facebook.com/dahlia.desire/')}><i className="fa-brands fa-facebook"></i></button>
            <button onClick={() => handleClick('https://www.instagram.com/dahlia.desire/')}><i className="fa-brands fa-instagram"></i></button>
            <button onClick={() => handleClick('https://linktr.ee/dahlia.desire')}><i className="fa-solid fa-link button"></i></button>
        </footer>
    )
};

export default Footer;