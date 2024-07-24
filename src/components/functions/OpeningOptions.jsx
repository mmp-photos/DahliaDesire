import { useState, useRef, useEffect, useContext } from 'react';
import { Col } from 'reactstrap';
import { AppContext } from '../AppContext';
import dahliaPic from '../../assets/images/dahlia.jpeg';
import { showDahlia, showDaddy } from '../functions/toggleFunctions';

export const OpeningOptions = ({ dahlia, daddy, setName, setInitialRender }) => {
    const [sliderPosition, setSliderPosition] = useState(0);
    const [dahliaWidth, setDahliaWidth] = useState(0);
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
        if (dimensions.width !== 0) {
            const half = dimensions.width / 2;
            setDahliaWidth(half + 16);
            setSliderPosition(half);
        }
    }, [dimensions]);

    const handleShowDahlia = showDahlia(dahlia, daddy, setName, setInitialRender);
    const handleShowDaddy = showDaddy(dahlia, daddy, setName, setInitialRender);

    return (
        <div id="daddy" ref={daddy} onClick={handleShowDaddy}>
            <img
                id="dahlia"
                style={{ width: dahliaWidth }}
                ref={dahlia}
                src={dahliaPic}
                alt="Dahlia"
                onClick={handleShowDahlia}
            />
        </div>
    );
};
