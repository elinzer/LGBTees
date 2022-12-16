import Carousel from 'react-bootstrap/Carousel';
import cap from '../../imgs/capp.png';
import cap2 from '../../imgs/cap2.png';
import cap3 from '../../imgs/cap3.png';

const PicCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cap}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cap2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cap3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default PicCarousel;
