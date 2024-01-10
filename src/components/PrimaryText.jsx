import { useState, useRef } from 'react';

const PrimaryText = () => {
    const [ name, setName ] = useState('Desire');

    return(
        <h1>{name}</h1>
    )
}

export default PrimaryText