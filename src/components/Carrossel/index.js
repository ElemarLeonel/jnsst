import { Carousel } from 'react-carousel-minimal';
import { imgsCarousel, captionStyle, slideNumberStyle } from './carousel';
import './index.css';

export default function Carrossel() {
 
  return (
    <section className="carousel">
      <div className="carousel-subitem" style={{ textAlign: "center" }}>
          <Carousel
            data={imgsCarousel}
            time={4000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            // thumbnailWidth="100px"
            style={{
              // display: "flex",
              // justifyContent: "center",
              marginTop: "70px",
            }}
          />
      </div>
    </section>
  );
}