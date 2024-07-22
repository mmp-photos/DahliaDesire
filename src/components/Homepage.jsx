import { useState, useRef, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { AppContext } from './AppContext';
import OpeningOptions from './OpeningOptions.jsx';

import PrimaryText from './PrimaryText.jsx'

function Homepage() {
  const { presentation, setPresentation, initialRender, setInitialRender } = useContext(AppContext);
  const params = useParams();
  const name = params.name;
  return (
      <>
        <Container style={{backgroundColor: "none"}}>
          <Row>
            {initialRender ? <OpeningOptions /> : 
            <h1>Test</h1>}
          </Row>
        </Container>
      </>
    )
}

export default Homepage
