import {useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';

const stylePresentation = (presentation) => {
    console.log(presentation);
    document.body.classList.remove('dahlia');
    document.body.classList.add('daddy');  
};

export default stylePresentation;