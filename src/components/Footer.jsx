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
        <Container className="footer">
            <Row>
                <Col md={3}>
                    <nav>
                        <ul>
                            <li>Photos</li>
                            <li>Burlesque AF</li>
                            <li>Book Me</li>
                        </ul>
                    </nav>
                </Col>
                <Col>
                    <h3>The Afro-Latin Laissez Faire steaming up the Midwest one stage at a time.</h3>
                </Col>
            </Row>
        </Container>
    )
};

export default Head;