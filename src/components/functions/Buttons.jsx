import { showDahlia, showDaddy } from '../functions/toggleFunctions';

export const DahliaButton = ({ dahlia, daddy, setName, setInitialRender }) => {
    const handleShowDahlia = showDahlia(dahlia, daddy, setName, setInitialRender);

    return (
        <button className="landing-page" onClick={handleShowDahlia}>
            <span className="dahlia-text yellow" style={{ fontSize: '5.2rem', lineHeight: '95%' }}>
                Dahlia
            </span>
        </button>
    );
};

export const DaddyButton = ({ dahlia, daddy, setName, setInitialRender }) => {
    const handleShowDaddy = showDaddy(dahlia, daddy, setName, setInitialRender);

    return (
        <button className="landing-page" onClick={handleShowDaddy}>
            <span className="daddy-text" style={{ lineHeight: '85%' }}>
                Daddy
            </span>
        </button>
    );
};
