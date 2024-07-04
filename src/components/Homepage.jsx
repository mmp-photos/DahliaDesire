import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useParams } from 'react-router-dom'

import PrimaryText from './PrimaryText.jsx'
import dahliaPic from '../assets/images/dahlia.jpeg';

function Homepage( { name, setName }) {
  const dahlia = useRef();
  const [ dahliaWidth, setDahliaWidth ] = useState(0);
  const [ sliderPosition, setSliderPosition ] = useState(0);
  let { presentation } = useParams();
  
  const daddy = useRef();
  const [dimensions, setDimensions] = useState({
      width: 0,
      height: 0,
  });

  useEffect(() =>{
    if(presentation){
      console.log(`Already set for Dahlia`)
      setName('Dahlia')
    }
  }, [presentation]);

  useEffect(() => {
      if (daddy.current) {
          setDimensions({
              width: daddy.current.offsetWidth,
              height: daddy.current.offsetHeight,
          });
      }
  }, []);

  useEffect(() => {
    if (dimensions.width != 0) {
        // console.log(`dimensions were updated to ${dimensions.width}`)
        const half = dimensions.width / 2
        console.log(`Half is ${half}`)
        setDahliaWidth(half + 16)
        setSliderPosition(half)
    }
  }, [dimensions]);
 
  //BUTTON FUNCTIONS//
  const showDahlia = (e) => {
    console.log('Dahlia was clicked')
    e.stopPropagation();
    dahlia.current.style.width = '100%'
    dahlia.current.style.borderRight = '0px'
    daddy.current.style.borderRadius = '50%'
    setTimeout(() => {
      document.body.classList.remove('daddy')
      document.body.classList.add('dahlia')
      setName('Dahlia')
    }, 2000);
  };

  const showDaddy = () => {
    console.log('Daddy was clicked')
    dahlia.current.style.width = '0px';
    daddy.current.style.borderRadius = '50%'
    dahlia.current.style.borderRight = '0px'
    setTimeout(() => {
      document.body.classList.remove('dahlia');
      document.body.classList.add('daddy');  
      setName('Daddy')
    }, 2000);
  };

  return (
      <>
        <Container style={{backgroundColor: "none"}}>
        <Row>
            <Col md={6} style={{paddingLeft: "3rem", paddingRight: "3rem"}}>
                <div id="daddy" ref={daddy} onClick={showDaddy}>
                  <img id="dahlia" style={{width: dahliaWidth}} ref={dahlia} src={dahliaPic} alt="Dahlia" onClick={showDahlia} />
                </div>
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
