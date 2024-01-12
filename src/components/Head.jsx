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

const Head = ({name}) => {
    return(
        <Container>
            <Row>
                <Col md={6}>
                    <header>
                        <img className="primary-logo" src={flowerLogo} alt="Dahlia Logo" />
                        <h1>{name} Desire</h1>
                    </header>
                </Col>
                <Col>
                    <nav>
                        <ul>
                            <li>Photos</li>
                            <li>Burlesque AF</li>
                            <li>Book Me</li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </Container>
    )
};

export default Head;