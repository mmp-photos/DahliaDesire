import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import PrimaryText from './PrimaryText.jsx'
import Shows from './Shows.jsx'
import dahliaPic from './../assets/images/dahlia.jpeg';

function Slider() {

  const dahlia = useRef();
  const slider = useRef();

  const [ dahliaWidth, setDahliaWidth ] = useState(0);
  const [ sliderPosition, setSliderPosition ] = useState(0);
  const [ name, setName ] = useState('Chose your')
  const [ bio, setBio ] = useState('')
  
  const daddy = useRef();
  const [dimensions, setDimensions] = useState({
      width: 0,
      height: 0,
  });
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
        console.log(`dimensions were updated to ${dimensions.width}`)
        const half = dimensions.width / 2
        console.log(`Half of the width should be ${half}`)
        setDahliaWidth(half + 16)
        setSliderPosition(half)
    }
  }, [dimensions]);
 
  //BUTTON FUNCTIONS//
  const showDahlia = () => {
    console.log('Dahlia was clicked')
    dahlia.current.style.width = '100%'
    document.body.classList.remove('daddy')
    document.body.classList.add('dahlia')
    slider.current.style.display = 'none'
    setName('Dahlia')
  };

  const showDaddy = () => {
    console.log('Dahlia was clicked')
    dahlia.current.style.visible = 'hidden';
    document.body.classList.remove('dahlia');
    document.body.classList.add('daddy');
    dahlia.current.style.width = '0px';
    slider.current.style.display = 'none'
    setName('Daddy')
  };

  const showBoth = () => {
    console.log(`Show both Dahlia and Daddy.`)
    document.body.classList.remove('dahlia');
    document.body.classList.remove('daddy');
    // dahlia.current.style.width = '450px'
    daddy.current.style.zIndex = 1
  };

  //SLIDER FUNCTIONS//
  const handleMouseDown = (e) => {
    e.preventDefault();
    const ref = slider.current;
    const originalPosition = sliderPosition;

    const onMouseMove = (e) => {
      document.body.style.cursor = "pointer";
      console.log(e.x)
      let difference = originalPosition - e.pageX
      let widthChange = originalPosition - difference
      const xLeft = widthChange
      setDahliaWidth(xLeft)
      console.log(`xWidth is ${xLeft} and daddy is ${dimensions.width}`)
      if(xLeft > 0 && xLeft < dimensions.width) {
        setSliderPosition(xLeft)
      } else if(xLeft <= 9) {
        setSliderPosition(0)
        window.removeEventListener("mousemove", onMouseMove)
        showDaddy()
        return
      } else if(xLeft > dimensions.width) {
        setSliderPosition(dimensions.width)
        window.removeEventListener("mousemove", onMouseMove)
        showDahlia()
      }
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.style.cursor = "auto";
    };

    if (slider) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
  }

  //JSX RETURN//
  return (
    <Container style={{backgroundColor: "none"}}>
        <Row>
            <Col md={6}>
                <div id="daddy" ref={daddy}>
                <img id="dahlia" style={{width: dahliaWidth}} ref={dahlia} src={dahliaPic} alt="Dahlia" />
                <div
                ref={slider}
                className="editPoint__left"
                onMouseDown={(e) => handleMouseDown(e)}></div>
                </div>

                {/* <section id="buttons">
                    <button onClick={showDahlia}>Dahlia</button>
                    <button onClick={showBoth}>Split</button>
                    <button onClick={showDaddy}>Daddy</button>
                </section> */}

            </Col>
            <Col>
                <PrimaryText name={name} bio={bio} />
                <Shows />        
            </Col>
        </Row>
    </Container>
  )
}

export default Slider
