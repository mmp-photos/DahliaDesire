import { useParams, useNavigate } from 'react-router-dom';

const showDahlia = (e) => {
    // const navigate = useNavigate();
    console.log('Dahlia was clicked')
    e.stopPropagation();
    dahlia.current.style.width = '100%'
    dahlia.current.style.borderRight = '0px'
    daddy.current.style.borderRadius = '50%'
    setTimeout(() => {
      document.body.classList.remove('daddy')
      document.body.classList.add('dahlia')
    //   navigate('/Dahlia');
      SetInitialRender(false);
    }, 2000);
  };

export default showDahlia;