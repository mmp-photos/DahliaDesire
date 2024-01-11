import { useState, useRef } from 'react';

const PrimaryText = ({name, bio}) => {
    return(
        <>
            <h1>{name} Desire</h1>
            <p>{bio}</p>
        </>
    )
};

export default PrimaryText;