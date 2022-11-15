import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import Lalo from "./lalo";
import { MainProvider } from "./context/MainContext";

function App() {

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `


  return (
    <MainProvider>
      <Lalo />
      <Navbar />
      <Container />
      <Footer />
    </MainProvider>
  );
}
export default App;
