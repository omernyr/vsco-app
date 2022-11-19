import styled from 'styled-components';
import Search from './Search'
import Photos from './Photos';

const ContainerBar = styled.div`
    display: flex;
    padding-top: 5%;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    flex-direction: column;
    
`

const Container = () => {

    return (
        <ContainerBar>
            <Search />
            <Photos />
        </ContainerBar>
    )
}

export default Container