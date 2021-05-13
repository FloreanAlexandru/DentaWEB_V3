import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import s1 from "./images/slide1.jpg";
import s2 from "./images/slide2.jpg";
import s3 from "./images/slide3.jpg";
import s4 from "./images/slide4.jpg";
import {
  Carousel
} from "react-bootstrap";

import { useTranslation } from 'react-i18next';

function Acasă(){
    
    const{t, i18n} = useTranslation();

    return(
        <div className="content-section">

        <h1 className="title"> {t('titluH.1')} </h1>
		<h3 className="subtitle"> {t('stitluH.1')} </h3>
        
            <div className="carousel">
                <Carousel>
                    <Carousel.Item interval={1500} className="carousel-item">
                    <img
                        className="d-block w-100"
                        src={s1}
                        alt="First slide"
                    />
                    </Carousel.Item>

                    <Carousel.Item interval={1500} className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={s2}
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval = {1500} className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={s3}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item"> 
                        <img
                            className="d-block w-100"
                            src={s4}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
    
}

export default Acasă;