import { useState, useRef } from 'react';
import Shows from './Shows.jsx'

const PrimaryText = ( { name, setName } ) => {
    return(
        <section>
          <p className="invisible" style={{width: "400px", color: "white"}}>The Afro-Latin Laissez Faire steaming up the Midwest one stage at a time. Puerto Rican burlesque and drag performer in Indianapolis, IN.</p>
          {name
            ? <Shows />
            : null
          }
        </section>
    )
};

export default PrimaryText;