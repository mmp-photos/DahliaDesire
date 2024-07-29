import { useState, useContext, useEffect } from 'react';
import showsData from '../assets/data/showsData';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';

const Shows = () => {
    const { name } = useContext(AppContext);
    const shows = showsData;
    const [ upcomingShows, setUpcomingShows ] = useState([]);
    const [ recentShows, setRecentShows ] = useState([]);
    const [ today, setToday ] = useState(new Date());
    const [futureDates, setFutureDates] = useState([]);

    useEffect(() => {
        // Function to compare dates and update futureDates state
        const compareDates = () => {
          const currentDate = new Date();
          const futureDatesArray = shows.filter(item => new Date(item.date) > currentDate);
          setUpcomingShows(futureDatesArray);
        };
        
        // Call compareDates function
        compareDates();
      }, [shows]);

    useEffect(() => {
        // Function to compare dates and update futureDates state
        const compareDates = () => {
          const currentDate = new Date();
          const futureDatesArray = shows.filter(item => new Date(item.date) < currentDate);
          const pastDatesArray = futureDatesArray.reverse();
          setRecentShows(futureDatesArray.slice(0, 5));
        };
    
        // Call compareDates function
        compareDates();
      }, [shows]);

    const sortedShows = recentShows.sort((a, b) => {
        const dateA = a.date;
        const dateB = b.date;
        if (dateA < dateB) {
          return 1;
        }
        if (dateA > dateB) {
          return -1;
        }
      
        // names must be equal
        return 0;
    });
    
    const listUpcomingShows = (item) =>{
        // console.log(`The number of upcoming shows is ${listUpcomingShows.length}`)
        if(upcomingShows.length === 0){
            // console.log(`too few upcoming shows`)
            return <li>Check back soon for new show announcements!</li>
        } else {
            // console.log(`There are upcoming shows`)
            let show_name = item.name;
            let date = item.date;
            let currentDate = new Date();

            let checkTime = item.date.split(' ');
            // console.log(`Check time is ${checkTime[1]}`)
            let aDate = new Date(item.date);
            // console.log(`aDate is ${aDate}`);
            let timeOptions = aDate.toLocaleTimeString(undefined, {
                hour: 'numeric',
                minute: 'numeric',
            });
            const options = { weekday: 'long', month: 'short', day: 'numeric' };
            let ticketLink = item.tickets;

            const ticketWindow = (url) => {
                window.open(url)
            };

            return(
                <li className="show-detail" key={item.id}>
                    {item.name ? <Link to={`/${name}/${item.id}`}><span className="show-title">{show_name}</span></Link>
                               : null}
                    {ticketLink  ? <button className="tickets" onClick={() => ticketWindow(ticketLink)}>Get Tickets</button>
                                 : null}
                    <br />
                    <span className="light">{aDate.toLocaleDateString('en-us', options)}</span>{checkTime[1] != "00:00:00" ? (<span><br /> {aDate.toLocaleTimeString('en-us', timeOptions)}</span>) : null }
                    {item.venue ? <span className="italic"><br />{item.venue}</span>
                                : null}
                </li>
            )
        }
    }
    
    const listRecentShows = (item) =>{
        if(recentShows.length > 0){
            let show_name = item.name;
            let date = item.date;
            let ticketLink = item.tickets;
            let aDate = new Date(item.date);
            let currentDate = new Date();
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

            const ticketWindow = (url) => {
                window.open(url)
            };

            return(
                <li key={item.id}>
                    <Link to={`/${name}/${item.id}`}><span className="show-title">{show_name}</span></Link><br />
                    <span className="show-time-recent">{aDate.toLocaleDateString('en-us', dateOptions)}</span>
                </li>
            )
        }
    }

    return(
        <>
            <h2>Upcoming Shows</h2>
            <ul>
            {upcomingShows.length === 0
                ? <li>Check back soon for newly added shows!</li>
                : upcomingShows.map((item) => listUpcomingShows(item))
            }
            </ul>
            <h2>Recent Shows</h2>
            <ul>
                {recentShows.map((item) => listRecentShows(item))}
            </ul>
        </>
    )
};

export default Shows;