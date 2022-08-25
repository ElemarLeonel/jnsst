import { Carousel } from 'react-carousel-minimal';
import Image1 from '../../assets/imgs-carousel/acao_abril_verde_castilho.webp';
import Image2 from '../../assets/imgs-carousel/curso_empilhadeira_cairu.webp';
import Image3 from '../../assets/imgs-carousel/curso_primeirossocorros_piarara.webp';
import './index.css';

export default function Carrossel() {
 const data = [
    {
      image: Image1,
      caption: "Ação Abril Verde Castilho"
    },
    {
      image: Image2,
      caption: "Treinamento de Empilhadeira Cairu Bicicletas"
    },
    {
      image: Image3,
      caption: "Treinamento de Primeiros Socorros Piarara Alimentos"
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <section className="carousel">
      <div className="carousel-subitem" style={{ textAlign: "center" }}>
        {/* <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
          <Carousel
            data={data}
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