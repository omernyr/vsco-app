import styled from 'styled-components';
import Search from './Search'

const Container = () => {

    const Container = styled.div`
        display: flex;
        padding-top: 5%;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        height: 45vh;
    `

    return (
        <Container>
            <Search />
        </Container>
    )
}

export default Container