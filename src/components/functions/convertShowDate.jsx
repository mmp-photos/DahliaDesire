const convertShowDate = (showDate) => {
    let aDate = new Date(showDate);
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    return <p>{aDate.toLocaleDateString('en-us', dateOptions)}</p>;
}

export default convertShowDate;