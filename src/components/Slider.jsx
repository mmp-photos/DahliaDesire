import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import PrimaryText from './PrimaryText.jsx'
import dahliaPic from './../assets/images/dahlia.jpeg';
import daddyPic from './../assets/images/daddy.jpeg';

function Slider() {

  const dahlia = useRef();
  const daddy = useRef();
  const slider = useRef();

  const [ daddyWidth, setDaddyWidth ] = useState(0);
  const [ dahliaWidth, setDahliaWidth ] = useState(0);
  const [ sliderPosition, setSliderPosition ] = useState(0);
  
  const refContainer = useRef();
  const [dimensions, setDimensions] = useState({
      width: 0,
      height: 0,
  });
  useEffect(() => {
      if (refContainer.current) {
          setDimensions({
              width: refContainer.current.offsetWidth,
              height: refContainer.current.offsetHeight,
          });
      }
  }, []);

  useEffect(() => {
    if (dimensions.width != 0) {
        console.log(`dimensions were updated to ${dimensions.width}`)
        const half = dimensions.width / 2
        console.log(`Half of the width should be ${half}`)
        setDahliaWidth(half)
        setSliderPosition(half)
    }
  }, [dimensions]);

  const half = 245;

  console.log(`dimensions are ${dimensions.width} and ${dimensions.height}`)

  // useEffect(() => {
  //   const getDaddy = daddy.current.offsetWidth
  //   setDaddyWidth(getDaddy)
  // }, [daddy.current]);
  // const [width, setWidth] = useState(0);
  // const half = 235;
 
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
    const originalPosition = ref.getBoundingClientRect().x;
    console.log(`Starting boundary is ${originalPosition}`)

    const onMouseMove = (e) => {
      document.body.style.cursor = "pointer";
      console.log(e.x)
      let difference = originalPosition - e.pageX + 25
      let widthChange = originalPosition - difference
      const xLeft = widthChange
      setDahliaWidth(xLeft)
      if(xLeft > 10) {
        setSliderPosition(xLeft)
      } else {
        setSliderPosition(0)
        showDahlia()
        return
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
                <div id="daddy" ref={refContainer}>
                <img id="dahlia" style={{width: dahliaWidth}} ref={dahlia} src={dahliaPic} alt="Dahlia" />
                </div>
                <div
                ref={slider}
                style={{marginLeft: sliderPosition}}
                className="editPoint__left"
                onMouseDown={(e) => handleMouseDown(e)}></div>

                <section id="buttons">
                    <button onClick={showDahlia}>Dahlia</button>
                    <button onClick={showBoth}>Split</button>
                    <button onClick={showDaddy}>Daddy</button>
                </section>

            </Col>
            <Col>
                {/* <PrimaryText name={name} bio={bio} />             */}
            </Col>
        </Row>
    </Container>
  )
}

export default Slider
