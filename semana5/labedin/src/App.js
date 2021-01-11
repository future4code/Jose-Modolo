import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ProfilePicture from './image/pp.jpeg';
import JobPicture from './image/logo-italine-white.jpg';
import JobPicture2 from './image/Surprise-Tech-Guy-min.png';
import CardPequeno from './components/CardPequeno/CardPequeno'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {ProfilePicture} 
          nome="Jose Modolo Neto" 
          descricao="Amante de Rock, Video-Game e filmes, futuro Dev pelas mãos da Labenu "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="bicard-container">
      <CardPequeno
          // imagem={JobPicture2}
          nome="Contato"
          descricao="jmodolo@devlabenu.com.br" 
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={JobPicture}
          nome="Italinea" 
          descricao="Montador móveis planejados" 
        />
        
        <CardGrande 
          imagem={JobPicture2}
          nome="Habilidades"
          descricao="Conhecimento de hardware, facilidade com leituras complexas e tecnicas" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
