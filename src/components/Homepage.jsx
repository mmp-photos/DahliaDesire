import { useState, useRef, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import OpeningOptions from './functions/OpeningOptions';

import PrimaryText from './PrimaryText.jsx'
import dahliaPic from '../assets/images/dahlia.jpeg';

function Homepage() {
  const dahlia = useRef();
  const { presentation, setPresentation, initialRender, setInitialRender } = useContext(AppContext);
  const [ dahliaWidth, setDahliaWidth ] = useState(0);
  const params = useParams();
  const name = params.name;
  const navigate = useNavigate();

  return (
      <>
        <Container style={{backgroundColor: "none"}}>
        <Row>
            <Col md={6} style={{paddingLeft: "3rem", paddingRight: "3rem"}}>
                <OpeningOptions />
            </Col>

            <Col>
                <PrimaryText name={name} />
                {!name
                  ?<>
                    <h1 className="daddy" style={{ fontSize: "2rem", color: "white", opacity: .5, textAlign: "center", marginTop: "1.5rem", marginBottom: "2.5rem"}} >NAME <br />YOUR <br />DESIRE</h1>
                  </>
                  : null
                }
                
                {!name
                  ?
                  <>
                    <button className="landing-page" onClick={showDahlia}>
                      <span className="dahlia-text yellow" style={{fontSize: "5.2rem", lineHeight: "95%"}}>Dahlia</span>
                    </button>
                  
                    <p style={{fontSize: "3rem", textAlign: "center", lineHeight: "-25%", marginBottom: "2rem"}}> or </p>
                  
                    <button className="landing-page" onClick={showDaddy}>
                      <span className="daddy-text" style={{lineHeight: "85%"}}>Daddy</span>
                    </button>
                  </>
                  : null
                }
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default Homepage
