import { useState, useRef, useEffect } from 'react';

const Shows = () => {
    return(
        <>
            <h2>Upcoming Shows</h2>
            <table>
                <tr>
                    <td style={{paddingTop: "26px"}}>The French Connection</td>
                    <td style={{paddingTop: "26px", paddingLeft: "18px", paddingRight: "18px"}}>January 19, 9 - 11pm</td>
                    <td style={{paddingTop: "26px"}}><button className="tickets" onClick = {() => {  location.href = `https://www.eventbrite.com/e/the-french-connection-tickets-780865508757`}} >Tickets </button></td>
                </tr>
                <tr>
                    <td style={{paddingTop: "26px"}}>The French Connection</td>
                    <td style={{paddingTop: "26px", paddingLeft: "18px", paddingRight: "18px"}}>January 19, 9 - 11pm</td>
                    <td style={{paddingTop: "26px"}}><button className="tickets" onClick = {() => {  location.href = `https://www.eventbrite.com/e/the-french-connection-tickets-780865508757`}} >Tickets </button></td>
                </tr>
                <tr>
                    <td style={{paddingTop: "26px"}}>The French Connection</td>
                    <td style={{paddingTop: "26px", paddingLeft: "18px", paddingRight: "18px"}}>January 19, 9 - 11pm</td>
                    <td style={{paddingTop: "26px"}}><button className="tickets" onClick = {() => {  location.href = `https://www.eventbrite.com/e/the-french-connection-tickets-780865508757`}} >Tickets </button></td>
                </tr>
            </table>
        </>
    )
};

export default Shows;