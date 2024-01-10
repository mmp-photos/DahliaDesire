import { useState, useRef } from 'react';
import './assets/styles/dahliaStyles.css';
import PrimaryText from './components/PrimaryText.jsx'
import dahlia from './assets/images/dahlia.jpeg';
import daddy from './assets/images/daddy.jpeg';
function App() {
  const cat = useRef();
  const dog = useRef();
  const slider = useRef();
  const boundingElement = useRef();
  const [ xValue, setXValue ] = useState();
  const [ dahliaWidth, setDahliaWidth ] = useState(490);

  const showCat = () => {
    dog.current.style.zIndex = 1
    console.log('The cat was clicked')
    cat.current.style.width = '800px'
    document.body.classList.remove('dog')
    document.body.classList.add('cat')
  };

  const showDog = () => {
    // dog.current.style.zIndex = 3
    dog.current.style.width = '800px';
    document.body.classList.remove('cat');
    document.body.classList.add('dog');
    cat.current.style.width = '2px';
  };

  const showBoth = () => {
    console.log(`Show both the cat and dog.`)
    document.body.classList.remove('cat');
    document.body.classList.remove('dog');
    cat.current.style.width = '450px'
    dog.current.style.zIndex = 1
  };
  
  const showMouse = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("X").value = x;
    document.getElementById("Y").value = y;
  }
  const consolePosition = () =>{
  }

  const [count, setCount] = useState(0)








  const [width, setWidth] = useState(470);
  const elementRef = useRef();

  const handleMouseDown = (e) => {
    e.preventDefault();
    const ref = elementRef.current;
    const originalPosition = ref.getBoundingClientRect().x;
    console.log(`Starting boundary is ${originalPosition}`)

    const onMouseMove = (e) => {
      document.body.style.cursor = "pointer";
      console.log(e.x)
      let difference = originalPosition - e.pageX + 25
      let widthChange = originalPosition - difference
      const xLeft = widthChange
      setDahliaWidth(xLeft + 18)
      xLeft >0 ? setWidth(xLeft) : setWidth(0)
      console.log(dahliaWidth)
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.style.cursor = "auto";
    };

    if (elementRef) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
  }

  return (
      <>
        <img id="cat" style={{ width: dahliaWidth }} ref={cat} src={dahlia} onClick={showCat} alt="dahlia" />
        <img id="dog" ref={dog} src={daddy} onClick={showDog} alt="daddy" />
        {/* <div id="divider" ref={slider} onDrag={consolePosition}></div> */}
        <section id="buttons">
          <button onClick={showCat}>Dahlia</button>
          <button onClick={showBoth}>Split</button>
          <button onClick={showDog}>Daddy</button>
        </section>
        <div
          ref={elementRef}
          style={{left: width}}
          className="editPoint__left"
          onMouseDown={(e) => handleMouseDown(e)}
        >
        </div>
        <PrimaryText />
      </>
  )
}

export default App
