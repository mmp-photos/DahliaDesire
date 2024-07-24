import { useParams, useNavigate } from 'react-router-dom';

const showDaddy = () => {
    console.log('Daddy was clicked')
    dahlia.current.style.width = '0px';
    daddy.current.style.borderRadius = '50%'
    dahlia.current.style.borderRight = '0px'
    setTimeout(() => {
        document.body.classList.remove('dahlia');
        document.body.classList.add('daddy');  
        SetInitialRender(false);
    }, 2000);
};

export default showDaddy;