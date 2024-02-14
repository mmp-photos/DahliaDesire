const ResetMode = () => {
    console.log(`Show both Dahlia and Daddy.`)
    document.body.classList.remove('dahlia');
    document.body.classList.remove('daddy');
    // dahlia.current.style.width = '450px'
    daddy.current.style.zIndex = 1
};

export default ResetMode;