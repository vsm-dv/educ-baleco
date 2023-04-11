import { Typography } from '@mui/material';
import './App.css';
import footerImg from './assets/Assinatura_H_Cor_PERIODO_ELEITORAL.png';
import headerImg from './assets/educ_classroom_HEADER.png';
import iconFb from './assets/icon-fb.svg';
import iconIg from './assets/icon-ig.svg';
import MainTable from './components/MainTable';

function App() {
  return (
    <>
      <header>
        <img src={headerImg} alt="" style={{ maxWidth: '100%', height: '200px' }} />

        <div className="social-media-div">
          <a href="https://www.facebook.com/projetoeducoficial">
            <img src={iconFb} alt="icone-facebook" style={{ height: '25px' }} />
          </a>
          <a href="https://www.instagram.com/projetoeducoficial">
            <img src={iconIg} alt="icone-instagram" style={{ height: '20.2px' }} />
          </a>
        </div>
      </header>
      <div className="App">
        <div className="description">
          <Typography variant="h4" sx={{ marginBottom: '30px', maxWidth: '90%' }}>
            Balanço Ecológico
          </Typography>
          <Typography color="inherit" variant="body1" textAlign="justify" sx={{ lineHeight: '26px', fontSize: '16px' }}>
            <p style={{ marginBottom: '20px' }}>
              O Balanço Ecológico, ou BALECO, é uma tecnologia Social desenvolvida pela ONG Guardiões do Mar, e tem por objetivo principal apresentar de forma simples a diminuição dos impactos
              ambientais alcançada quando reciclamos os resíduos sólidos.
            </p>
            <p style={{ marginBottom: '20px' }}>
              No Projeto EDUC, tanto na Fase I, quanto na Fase II, o BALECO foi e vem sendo empregado, apresentando didaticamente à população, os resultados da coleta seletiva e encaminhamento dos
              resíduos para a reciclagem.
            </p>
            <p>
              É muito fácil saber qual o resultado do seu BALECO, basta lançar os valores alcançados com a separação dos resíduos sólidos na tabela abaixo, e descobrir qual foi a sua contribuição para
              a conservação do planeta Terra:
            </p>
          </Typography>
        </div>

        <div className="tablesDiv">
          <MainTable />
        </div>
        <div style={{ width: '59%' }}>
          <Typography sx={{ fontSize: '14px', marginBottom: '30px' }}>
            OBS: Devido às mudanças da indústria e nos processos de produção, alguns valores estão sendo atualizados constantemente
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: '30px' }}>
            Tire um print e compartilhe o resultado do seu BALECO conosco através do nosso Instagram <a href="https://www.instagram.com/projetoeducoficial/">@projetoeducoficial</a>
          </Typography>
        </div>
        <footer>
          <img src={footerImg} alt="" style={{ maxWidth: '100vw', height: '130px' }} />
        </footer>
      </div>
    </>
  );
}

export default App;
