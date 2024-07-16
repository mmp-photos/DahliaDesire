import { useState, useRef, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';

const OpeningOptions = () => {
    const [ sliderPosition, setSliderPosition ] = useState(0);
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
        navigate('/Dahlia');
        SetInitialRender(false);
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
        navigate('/Daddy');
        SetInitialRender(false);
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
    )
}

export default OpeningOptions
