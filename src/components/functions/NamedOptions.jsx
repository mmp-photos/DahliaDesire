import { useState, useRef, useEffect, useContext } from 'react';
import { Col } from 'reactstrap';
import { AppContext } from '../AppContext';
import dahliaPic from '../../assets/images/dahlia.jpeg';
import { showDahlia, showDaddy } from '../functions/toggleFunctions';

export const NamedOptions = ({ name, dahlia }) => {
    const [sliderPosition, setSliderPosition] = useState(0);
    const [dahliaWidth, setDahliaWidth] = useState(0);
    
    useEffect(() => {
        if(name !== "Dahlia" || "dahlia"){
            setDahliaWidth("100%");
        } else {
            setDahliaWidth("0px");
        }
    }, [])

    switch(name){
        case "Dahlia" || "dahlia":
        return(
        <div id="daddy" style={{ borderRadius: "500px"}}>
            <img
                id="dahlia"
                style={{ width: "100%" }}
                // ref={dahlia}
                src={dahliaPic}
                alt="Dahlia"
            />
        </div>
        )
        case "Daddy" || "daddy":
        return(
        <div id="daddy" style={{ borderRadius: "500px"}}>
            <img
                id="dahlia"
                style={{ width: "0px", borderRight: "0px"}}
                // ref={dahlia}
                src={dahliaPic}
                alt="Dahlia"
            />
        </div>
        )
    }

    // return (
    //     <div id="daddy" style={{ borderRadius: "500px"}}>
    //         <img
    //             id="dahlia"
    //             style={{ width: dahliaWidth, borderRadius: "100px"}}
    //             // ref={dahlia}
    //             src={dahliaPic}
    //             alt="Dahlia"
    //         />
    //     </div>
    // );
};
