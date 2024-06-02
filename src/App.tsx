import './App.css';
import Container from './components/Container';
import Cabecalho from './components/cabecalho';
import Grafico from './components/grafico';
import Rodape from './components/rodape';
import Tabela from './components/tabela';
import Titulo from './components/titulo';
import useDadosConsulta from './useDadosConulta';
import useDadosProfissional from './useDadosProfissional';

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
      </Container>
      <Rodape/>
    </>
  );
}

export default App;
