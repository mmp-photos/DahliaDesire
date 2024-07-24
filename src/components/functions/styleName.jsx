import {useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';

const styleName = (name) => {
    switch(name) {
        case "Dahlia" || "dahlia":
            console.log(`Name passed to styleName ${name}`)
            document.body.classList.remove('daddy');
            document.body.classList.add('dahlia');  
            break;
        case "Daddy" || "daddy":
            console.log(`Name passed to styleName ${name}`)
            document.body.classList.remove('dahlia');
            document.body.classList.add('daddy');  
            break;
        default:
            null;
    }
};

export default styleName;