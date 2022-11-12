import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {

  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    border: 2px solid green;
    width: 10%;
    height: 10%;
  }
  `
  const Div = styled.div`
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:0;
    padding:0;
    width:100%;
    height: 100vh;
  `

  return (
    <Div>
      <Navbar />
      <Container />
      <Button>Click</Button>
      <Footer />
    </Div>
  );
}

export default App;
