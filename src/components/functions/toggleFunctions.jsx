// toggleFunctions.js
export const showDahlia = (dahlia, daddy, setName, setInitialRender) => (e) => {
    console.log('Dahlia was clicked');
    e.stopPropagation();
    if (dahlia.current) {
        dahlia.current.style.width = '100%';
        dahlia.current.style.borderRight = '0px';
    }
    if (daddy.current) {
        daddy.current.style.borderRadius = '50%';
    }
    setTimeout(() => {
        document.body.classList.remove('daddy');
        document.body.classList.add('dahlia');
        setName('Dahlia');
        setInitialRender(false);
    }, 2000);
};

export const showDaddy = (dahlia, daddy, setName, setInitialRender) => () => {
    console.log('Daddy was clicked');
    if (dahlia.current) {
        dahlia.current.style.width = '0px';
        dahlia.current.style.borderRight = '0px';
    }
    if (daddy.current) {
        daddy.current.style.borderRadius = '50%';
    }
    setTimeout(() => {
        document.body.classList.remove('dahlia');
        document.body.classList.add('daddy');
        setName('Daddy');
        setInitialRender(false);
    }, 2000);
};

export const showDefault = (dahlia, daddy, setName, setInitialRender) => () => {
    console.log('Default was clicked');
    if (dahlia.current) {
        dahlia.current.style.width = '0px';
        dahlia.current.style.borderRight = '0px';
    }
    if (daddy.current) {
        daddy.current.style.borderRadius = '50%';
    }
    setTimeout(() => {
        document.body.classList.remove('dahlia');
        document.body.classList.remove('daddy');
        setInitialRender(true);
    }, 2000);
    setName(null);
};