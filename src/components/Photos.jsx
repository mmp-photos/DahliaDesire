import { useState, useEffect, useContext } from 'react';
import { 
    CarouselControl, 
    Carousel, 
    CarouselItem, 
    CarouselIndicators, 
} from 'reactstrap';
import { AppContext } from './AppContext';

import { Helmet, HelmetProvider } from 'react-helmet-async';
const helmetContext = {};

import dahlia01 from '../assets/images/dahlia01.jpg';
import dahlia02 from '../assets/images/dahlia02.jpg';
import dahlia03 from '../assets/images/dahlia03.jpg';
import dahlia04 from '../assets/images/dahlia04.jpg';
import dahlia05 from '../assets/images/dahlia05.jpg';
import dahlia06 from '../assets/images/dahlia06.jpg';
import daddy01 from '../assets/images/daddy01.jpg';
import daddy02 from '../assets/images/daddy02.jpg';
import daddy03 from '../assets/images/daddy03.jpg';
import daddy04 from '../assets/images/daddy04.jpg';
import daddy05 from '../assets/images/daddy05.jpg';
import daddy06 from '../assets/images/daddy06.jpg';

const Photos = () => {
    const { name } = useContext(AppContext);
    console.log(name);
    const [ helmetTitle, setHelmetTitle ] = useState();
    useEffect(() => {
        setHelmetTitle(`Photos - ${name} Desire`)
    }, []);
    // State for Carousel
    const [activeIndex, setActiveIndex] = useState(0); 
    const [animating, setAnimating] = useState(false); 

    // Sample items for Carousel
    let items = [];

    // Sample items for Carousel based on the name
    if (name === "Dahlia") {
        items = [ 
            { 
                caption: 'Sample Caption One',
                src: dahlia01, 
                altText: 'Slide One'
            }, 
            { 
                caption: 'Sample Caption Two',
                src: dahlia02, 
                altText: 'Slide Two'
            },
            { 
                caption: 'Sample Caption Three',
                src: dahlia03,
                altText: 'Slide Three'
            },
            { 
                caption: 'Sample Caption Three',
                src: dahlia04,
                altText: 'Slide Three'
            },
            { 
                caption: 'Sample Caption Three',
                src: dahlia05,
                altText: 'Slide Three'
            },
            { 
                caption: 'Sample Caption Three',
                src: dahlia06,
                altText: 'Slide Three'
            },
        ];
    } else if (name === "Daddy") {
        items = [ 
            { 
                caption: 'Sample Caption One',
                src: daddy01, 
                altText: 'Slide One'
            }, 
            { 
                caption: 'Sample Caption Two',
                src: daddy02, 
                altText: 'Slide Two'
            },
            { 
                caption: 'Sample Caption Three',
                src: daddy03,
                altText: 'Slide Three'
            },
            { 
                caption: 'Sample Caption Three',
                src: daddy04,
                altText: 'Slide Three'
            },
            { 
                caption: 'Sample Caption Three',
                src: daddy05,
                altText: 'Slide Three'
            },
            { 
                caption: 'Sample Caption Three',
                src: daddy06,
                altText: 'Slide Three'
            }
        ];
    } else {
        // Default items if name is not provided or doesn't match any condition
        items = [ 
            { 
                caption: 'Sample Caption One',
                src: dahlia01, 
                altText: 'Slide One'
            }, 
            { 
                caption: 'Sample Caption Two',
                src: dahlia02, 
                altText: 'Slide Two'
            },
            { 
                caption: 'Sample Caption Three',
                src: dahlia03,
                altText: 'Slide Three'
            },
        ];
    }

    // Items array length 
    const itemLength = items.length - 1 

    // Previous button for Carousel 
    const previousButton = () => { 
        if (animating) return; 
        const nextIndex = activeIndex === 0 ? 
            itemLength : activeIndex - 1; 
        setActiveIndex(nextIndex); 
    } 

    // Next button for Carousel 
    const nextButton = () => { 
        if (animating) return; 
        const nextIndex = activeIndex === itemLength ? 
            0 : activeIndex + 1; 
        setActiveIndex(nextIndex); 
    } 

    // Carousel Item Data 
    const carouselItemData = items.map((item) => { 
        return ( 
            <CarouselItem
                key={item.src} 
                onExited={() => setAnimating(false)} 
                onExiting={() => setAnimating(true)} 
            > 
                <img style={{objectFit: "contain"}} src={item.src} alt={item.altText} /> 
            </CarouselItem>
        ); 
    }); 

    return (
        <HelmetProvider context={helmetContext}>
        <Helmet>
            <title>{helmetTitle}</title>
        </Helmet>
        <section id="photos">
        <Carousel previous={previousButton} next={nextButton} 
            activeIndex={activeIndex}> 
            <CarouselIndicators items={items} 
                activeIndex={activeIndex}
                onClickHandler={(newIndex) => { 
                    if (animating) return; 
                    setActiveIndex(newIndex); 
                }} /> 
            {carouselItemData} 
            <CarouselControl directionText="Prev"
                direction="prev" onClickHandler={previousButton} /> 
            <CarouselControl directionText="Next"
                direction="next" onClickHandler={nextButton} /> 
        </Carousel>
        </section>
        </HelmetProvider>
    );
} 
export default Photos;