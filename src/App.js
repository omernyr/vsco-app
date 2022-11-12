import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
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
