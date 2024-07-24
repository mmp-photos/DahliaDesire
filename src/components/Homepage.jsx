import { useState, useRef, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { AppContext } from './AppContext';
import { OpeningOptions } from './functions/OpeningOptions';
import { DaddyButton, DahliaButton } from './functions/Buttons';
import Shows from './Shows';
import PrimaryText from './PrimaryText.jsx'

function Homepage() {
  const { setName, initialRender, setInitialRender } = useContext(AppContext);
  const params = useParams();
  const dahlia = useRef();
  const daddy = useRef();
  
  return (
      <>
        <Container style={{backgroundColor: "none"}}>
        <Row>
            <Col md={6} style={{paddingLeft: "3rem", paddingRight: "3rem"}}>
              <OpeningOptions
                dahlia={dahlia}
                daddy={daddy}
                setName={setName}
                setInitialRender={setInitialRender}
              />
            </Col>

            <Col>
                <PrimaryText />                
                {initialRender
                  ?
                  <>
                    <DahliaButton
                        dahlia={dahlia}
                        daddy={daddy}
                        setName={setName}
                        setInitialRender={setInitialRender}
                    />
                    <DaddyButton
                        dahlia={dahlia}
                        daddy={daddy}
                        setName={setName}
                        setInitialRender={setInitialRender}
                    />
                  </>
                  :
                  <Shows />
                }
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default Homepage
