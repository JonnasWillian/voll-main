import './App.css';
import Container from './components/Container';
import Cabecalho from './components/Cabecalho';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import useDadosConsulta from './useDadosConulta';
import useDadosProfissional from './useDadosProfissional';
import Avaliacao from './components/Avaliacao/index.';

function App() {
  const { dados: consultas, erro: consultasErros } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErros } = useDadosProfissional();

  if (consultasErros || profissionaisErros) {
    console.log('ocorreu um erro na requisição')
  }

  return (
    <>
      <Cabecalho/>
      <Container>
        <Titulo>Área administrativa</Titulo>
        <Tabela consultas={consultas}/>
        <Grafico consultas={consultas} profissionais={profissionais}/>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Rodape/>
    </>
  );
}

export default App;
