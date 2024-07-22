import { useState, useRef, useEffect, useContext } from 'react';
import { Col, } from 'reactstrap';
import { AppContext } from './AppContext';
import dahliaPic from '../assets/images/dahlia.jpeg';

const OpeningOptions = () => {
    const { presentation, setPresentation, initialRender, setInitialRender } = useContext(AppContext);
    const dahlia = useRef();
    const [ sliderPosition, setSliderPosition ] = useState(0);
    const [ dahliaWidth, setDahliaWidth ] = useState(0);
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
          // console.log(`dimensions were updated to ${dimensions.width}`)
          const half = dimensions.width / 2
          // console.log(`Half is ${half}`)
          setDahliaWidth(half + 16)
          setSliderPosition(half)
      }
    }, [dimensions]);

    const showDahlia = (e) => {
        console.log('Dahlia was clicked');
        e.stopPropagation();
        dahlia.current.style.width = '100%';
        dahlia.current.style.borderRight = '0px';
        daddy.current.style.borderRadius = '50%';
        setTimeout(() => {
            document.body.classList.remove('daddy');
            document.body.classList.add('dahlia');
            setPresentation('Dahlia');
            setInitialRender(false);
        }, 2000);
    };

    const showDaddy = () => {
        console.log('Daddy was clicked');
        dahlia.current.style.width = '0px';
        daddy.current.style.borderRadius = '50%';
        dahlia.current.style.borderRight = '0px';
        setTimeout(() => {
            document.body.classList.remove('dahlia');
            document.body.classList.add('daddy');
            setPresentation('Daddy');
            setInitialRender(false);
        }, 2000);
    };
     
    const namedImage = (name) =>{
        if(name === "Dahlia"){
          dahlia.current.style.width = '100%'
          daddy.current.style.borderRadius = '50%';
          dahlia.current.style.borderRight = '0px';
        }
        if(name === "Daddy"){
          dahlia.current.style.width = '0px';
          daddy.current.style.borderRadius = '50%'
          dahlia.current.style.borderRight = '0px'    
        }
    };
  
    const test = () =>{
      return( `
        <div id="daddy">
          Not the first render.
        </div>`
      )
    };
  

    return(
      <>
      <Col md={6} style={{paddingLeft: "3rem", paddingRight: "3rem"}}>
        <div id="daddy" ref={daddy} onClick={showDaddy}>
        <img
          id="dahlia"
          style={{ width: dahliaWidth }}
          ref={dahlia}
          src={dahliaPic}
          alt="Dahlia"
          onClick={showDahlia}
        />
      </div>
      </Col>

      <Col>
        <>
          <button className="landing-page" onClick={showDahlia}>
            <span className="dahlia-text yellow" style={{fontSize: "5.2rem", lineHeight: "95%"}}>Dahlia</span>
          </button>
        
          <p style={{fontSize: "3rem", textAlign: "center", lineHeight: "-25%", marginBottom: "2rem"}}> or </p>
        
          <button className="landing-page" onClick={showDaddy}>
            <span className="daddy-text" style={{lineHeight: "85%"}}>Daddy</span>
          </button>
        </>
      </Col>
      </>
    )
};

export default OpeningOptions;