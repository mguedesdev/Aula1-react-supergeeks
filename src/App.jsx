import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ContainerText from '../components/container_text/container_text';

function App() {

  return (
    <>
      <Container className="banner" fluid>
        <Row className="justify-content-center mb-3"> 
          <Col className="d-flex justify-content-center">
            <h1 className='white-text'>Sr. Batata</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={8} md={6} lg={4} className="d-flex justify-content-center">
            <Image roundedCircle src="/Batata.png" />
          </Col>
        </Row>
      </Container>
      <Container className='containerText'>
        <ContainerText subtitle="Sobre mim" text="O mundo é um lugar vasto e maravilhoso, cheio de coisas incríveis para ver e fazer. Há tantas coisas para aprender e experimentar, e nunca há tempo suficiente para fazer tudo. Mas não se preocupe, você não precisa fazer tudo de uma vez. Basta aproveitar o momento e aproveitar a jornada." />
        <ContainerText subtitle="Sobre este website" text="Muita coisa legal!" />
        <ContainerText subtitle="Anotações" text="Tchau" />
        <ContainerText subtitle="Blog" text="A vida é uma aventura, e você é o protagonista. Você pode fazer o que quiser, e você pode ser quem quiser. Então vá lá e faça algo incrível. Não tenha medo de falhar, porque os erros são apenas oportunidades de aprender e crescer." />
        <ContainerText subtitle="Notícias" text="O mundo está esperando por você, então não perca tempo. Vá lá e explore-o!" />
      </Container>
    </>
  )
}

export default App
