import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import { MainProvider } from "./context/MainContext";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  overflow: scroll;
  height: 100vh;    
`


function App() {

  return (
    <MainProvider>
      <Div>
        <Navbar />
        <Container />
        <Footer />
      </Div>
    </MainProvider>
  );
}
export default App;
