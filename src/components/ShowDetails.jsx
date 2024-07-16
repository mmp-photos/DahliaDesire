import { useState, useRef, useEffect } from 'react';
import { useParams } from "react-router-dom";
import showsData from '../assets/data/showsData';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col, Button } from 'reactstrap';

const ShowDetails = ( {name, setName} ) => {
    const params = useParams();
    const [ showInfo, setShowInfo ] = useState({});
    const helmetContext = {};
    const helmetTitle = "test";

    useEffect(() => {
        const showDetails = showsData.filter(item => params.showId === item.id);
        setShowInfo(showDetails[0]);

    }, [params.showId])

    console.log(showInfo)

    if(!showInfo){
        return(
            <>
                <p>Loading</p>
            </>
        )
    }

    return(
        <>
            <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <img src="/images/dahlia06.jpg" alt="Dahlia Desire" />
                    </Col>
                    <Col>
                        <h1>{showInfo.name}</h1>
                        <p>{showInfo.about}</p>
                    </Col>
                </Row>
            </Container>
            </HelmetProvider>
        </>
    )
}

export default ShowDetails;
