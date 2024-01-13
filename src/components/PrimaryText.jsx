import { useState, useRef } from 'react';
import Shows from './Shows.jsx'

const PrimaryText = ({name, bio}) => {
    return(
        <section>
        {!name
          ?<>
             <h1 className="daddy" style={{ fontSize: "4rem", color: "white", opacity: .5}} >NAME <br />YOUR <br /></h1>
             <h1 className="dahlia" style={{ fontSize: "7.5rem", fontWeight: 400, color: "yellow", opacity: .9 }}>Desire</h1>
           </>
          : null
        }
          <p style={{width: "400px", color: "white"}}>The Afro-Latin Laissez Faire steaming up the Midwest one stage at a time. Puerto Rican burlesque and drag performer in Indianapolis, IN.</p>
          {name
            ? <Shows />
            : null
          }
        </section>
    )
};

export default PrimaryText;