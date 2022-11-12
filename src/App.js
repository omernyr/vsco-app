import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {

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
      <Footer />
    </Div>
  );
}

export default App;
