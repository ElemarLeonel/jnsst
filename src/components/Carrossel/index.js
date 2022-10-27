import { Carousel } from 'react-carousel-minimal';
import ImagemAbrilVerdeCastilho from '../../assets/imgs-carousel/acao_abril_verde_castilho.webp';
import ImagemCursoEmpilhadeiraCairu from '../../assets/imgs-carousel/curso_empilhadeira_cairu.webp';
import ImagemCursoPrimeirosSocorrosPiarara from '../../assets/imgs-carousel/curso_primeirossocorros_piarara.webp';
import ImagemOutubroRosaEletrogoes from '../../assets/imgs-carousel/outubro-rosa-eletrogoes.webp';
import ImagemNovembroAzulEletrogoes from '../../assets/imgs-carousel/novembro-azul-eletrogoes.webp';
import './index.css';

export default function Carrossel() {
 const data = [
    {
      image: ImagemAbrilVerdeCastilho,
      caption: "Ação Abril Verde Castilho"
    },
    {
      image: ImagemCursoEmpilhadeiraCairu,
      caption: "Treinamento de Empilhadeira Cairu Bicicletas"
    },
    {
      image: ImagemCursoPrimeirosSocorrosPiarara,
      caption: "Treinamento de Primeiros Socorros Piarara Alimentos"
    },
    {
      image: ImagemOutubroRosaEletrogoes,
      caption: "Ação Sobre Outubro Rosa na Eletrogoes"
    },
    {
      image: ImagemNovembroAzulEletrogoes,
      caption: "Ação Sobre Novembro Azul na Eletrogoes"
    }
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