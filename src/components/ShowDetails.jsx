import { useState, useRef, useEffect } from 'react';
import { useParams } from "react-router-dom";
import showsData from '../assets/data/showsData';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col, Button } from 'reactstrap';
import convertShowDate from './functions/convertShowDate';

const ShowDetails = ( {name, setName} ) => {
    const params = useParams();
    const [ showInfo, setShowInfo ] = useState({});
    const helmetContext = {};
    const helmetTitle = "test";
    const baseUrl = import.meta.env.VITE_BASE_URL;
    
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
                        {showInfo.poster ? <img  style={{maxWidth: "100%"}} src={`${baseUrl}/images/posters/24072601.jpeg`} alt="Dahlia Desire" />
                                         : <img src="/images/dahlia06.jpg" alt="Dahlia Desire" />    
                    }
                    </Col>
                    <Col>
                        <h1>{showInfo.name}</h1>
                        <p>{showInfo.about}</p>
                        {showInfo.date
                            ? convertShowDate(showInfo.date)
                            : null
                        }
                        {showInfo.venue
                            ? <p>{showInfo.venue}</p>
                            : null
                        }
                        {showInfo.description
                            ? <p>{showInfo.description}</p>
                            : null
                        }

                    </Col>
                </Row>
            </Container>
            </HelmetProvider>
        </>
    )
}

export default ShowDetails;
