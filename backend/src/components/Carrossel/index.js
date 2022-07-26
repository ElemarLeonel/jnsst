import { Carousel } from 'react-carousel-minimal';
import Image1 from '../../assets/imgs-carousel/acao_abril_verde_castilho.jpg';
import Image2 from '../../assets/imgs-carousel/curso_empilhadeira_cairu.jpeg';
import Image3 from '../../assets/imgs-carousel/curso_primeirossocorros_piarara.jpg';
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
            width="auto"
            height="1000px"
            captionStyle={captionStyle}
            radius="5px"
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
              marginTop: "60px",
            }}
          />
      </div>
    </section>
  );
}